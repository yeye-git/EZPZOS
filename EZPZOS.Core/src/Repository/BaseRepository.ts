import { IRepository } from "./IRepository";
import { DateTime, IProcedureResult, PreparedStatement, config, connect } from "mssql";
import * as dotenv from "dotenv-safe";
import { Base } from "../Domain/Base";
import { LogLevel, DefaultTargetLogLevel, BooleanTrueString } from "../Common/Constants";
import { IDataObject } from "../Interface/IDataObject";
import { Event } from "../Domain/Event";
import { EventCode } from "../Enum/EventCode";
dotenv.config();

export class BaseRepository extends Base implements IRepository {
	private ConnectionConfig: config;

	constructor() {
		let loglevel: number = DefaultTargetLogLevel;
		try {
			if (process.env.LOG_LEVEL) {
				loglevel = parseInt(process.env.LOG_LEVEL);
			}
		} catch (ex) {
			console.log(`Cannot parse log level from env var, Exception: ${ex}`);
		}
		super(loglevel);

		super.initLogger(this.constructor.name);

		this.ConnectionConfig = {
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			server: process.env.DB_SERVER ?? "",
			database: process.env.DB_NAME,
			options: {
				encrypt: false,
				trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === BooleanTrueString // change to true for local dev / self-signed certs
			}
		};
	}

	async Execute<T>(
		sqlQuery: string,
		dataObject: IDataObject | object,
		prepareParam: (preparedStatement: PreparedStatement) => PreparedStatement,
		callback: (err?: Error, recordset?: IProcedureResult<T>) => void
	) {
		try {
			let connnection = await connect(this.ConnectionConfig);
			let preparedStatement = new PreparedStatement(connnection);

			// Prepare Parameters from callback
			preparedStatement = prepareParam(preparedStatement);

			// Prepare Query
			preparedStatement.prepare(sqlQuery, err => {
				if (err) {
					this.Logger.Log(
						"Execute",
						`Error preparing Statement, Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// Execute Query with Data
					preparedStatement.execute(dataObject, (err, results: IProcedureResult<T> | undefined) => {
						if (err) {
							this.Logger.Log(
								"Execute",
								`Error executing Statement, Exception: ${JSON.stringify(err)}`,
								LogLevel.ERROR
							);
						}
						callback(err, results);
						preparedStatement.unprepare();
					});
				}
			});
		} catch (err) {
			this.Logger.Log("Execute", `Error Executing Statement: ${JSON.stringify(err)}`, LogLevel.ERROR);
		}
	}

	async ExecutePromise<T>(
		sqlQuery: string,
		dataObject: IDataObject | object,
		prepareParam: (preparedStatement: PreparedStatement) => PreparedStatement
	): Promise<IProcedureResult<T> | null | undefined> {
		try {
			let connnection = await connect(this.ConnectionConfig);
			let preparedStatement = new PreparedStatement(connnection);

			this.Logger.Log("Execute", `Preparing Statement`, LogLevel.DEBUG);
			// Prepare Parameters from callback
			preparedStatement = prepareParam(preparedStatement);

			// Prepare Query
			await preparedStatement.prepare(sqlQuery);
			this.Logger.Log("Execute", `Executing Statement`, LogLevel.DEBUG);
			// Execute Query with Data
			let results = await preparedStatement.execute(dataObject);
			await preparedStatement.unprepare();
			return results;
		} catch (err) {
			this.Logger.Log("ExecutePromise", `Error Executing Statement: ${JSON.stringify(err)}`, LogLevel.ERROR);
		}
		return undefined;
	}

	async Insert(dataObject: IDataObject, callback: (result: boolean) => void) {
		throw new Error("Method not implemented.");
	}
	async Update(dataObject: IDataObject, callback: (result: boolean) => void) {
		throw new Error("Method not implemented.");
	}
	async Delete(dataObject: IDataObject, callback: (result: boolean) => void) {
		throw new Error("Method not implemented.");
	}

	public async Save(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean, errorCode?: number, errorMessage?: string) => void
	) {
		this.Logger.Log(
			"Save",
			`Saving dataobject: ${JSON.stringify(dataObject)}, isUpdate: ${isUpdate}, isDelete: ${isDelete}`,
			LogLevel.TRACE
		);

		this.OnSaving(dataObject, userId, isUpdate, isDelete, result => {
			if (result) {
				if (isUpdate) {
					dataObject.UpdatedTimestamp = new Date();
					dataObject.UpdatedUserId = userId;
					this.Update(dataObject, result => {
						if (result) {
							this.Logger.Log("Update", `Updating Result: ${result}.`, LogLevel.DEBUG);

							this.OnSaved(dataObject, userId, isUpdate, isDelete, result => {
								this.Logger.Log("OnSaved", `Result: ${result}.`, LogLevel.DEBUG);

								callback(result);

								if (!result) {
									// TODO Rollback Onsaving and Update
								}
							});
						}
					});
				} else if (isDelete) {
					//TODO to be determined if deletion is soft or hard
				} else {
					// insert

					dataObject.CreatedTimestamp = new Date();
					dataObject.CreatedUserId = userId;
					this.Insert(dataObject, (result: boolean, errorCode?:number, errorMessage?: string) => {
						if (result) {
							this.Logger.Log("Insert", `Inserting Result: ${result}.`, LogLevel.DEBUG);

							try {
								this.OnSaved(dataObject, userId, isUpdate, isDelete, result => {
									this.Logger.Log("OnSaved", `Result: ${result}.`, LogLevel.DEBUG);

									if (!result) {
										// TODO Rollback Onsaving and Insert
									}

									callback(result);
								});
							} catch (err) {
								this.Logger.Log("OnSaved", `Exception: ${JSON.stringify(err)}`, LogLevel.ERROR);
								callback(false);
								return;
							}
						} else {
							callback(false, errorCode, errorMessage);
							return;
						}
					});
				}
			} else {
				this.Logger.Log("OnSaving", `Failed to save dataobject. Failed on OnSaving()`, LogLevel.ERROR);
			}
		});
	}

	async OnSaving(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	) {
		callback(true);
		return;
	}

	async OnSaved(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	) {

		let eventRepositoryType = await import("./EventRepository");

		if (!eventRepositoryType || eventRepositoryType === undefined || eventRepositoryType === null) {
			this.Logger.Log(
				"OnSaved",
				`Failed to import Event Repository dynamically :${dataObject.Id}.`,
				LogLevel.ERROR
			);
			callback(false);
			return;
		}

		this.Logger.Log("OnSaved", `Save dataobject Events.`, LogLevel.DEBUG);

		let event = new Event();
		event.EventTime = new Date();
		event.ParentId = dataObject.Id;
		event.ParentTable = dataObject.constructor.name;
		event.IsDeleted = false;

		if (!isUpdate && !isDelete) {
			// Adding Event 'ADD' when inserting
			event.EventCode = EventCode.ADD;
		} else if (isUpdate) {
			// Adding Event 'UPDATE' when inserting
			event.EventCode = EventCode.UPDATE;
		} else if (isDelete) {
			// Adding Event 'DELETE' when inserting
			event.EventCode = EventCode.DELETE;
		}

		// Saving Event

		try {
			new eventRepositoryType.EventRepository().Save(event, userId, false, false, result => {
				if (result) {
					this.Logger.Log(
						"OnSaved",
						`Event ${EventCode[event.EventCode]} Saved for dataobject :${dataObject.Id}.`,
						LogLevel.DEBUG
					);
					callback(true);
					return;
				} else {
					this.Logger.Log(
						"OnSaved",
						`Failed save Event ${EventCode[event.EventCode]} for dataobject :${dataObject.Id}.`,
						LogLevel.DEBUG
					);
					callback(false);
					return;
				}
			});
		} catch (err) {
			this.Logger.Log(
				"OnSaved",
				`Failed save Event ${EventCode[event.EventCode]} for dataobject :${
					dataObject.Id
				}. Exception: ${JSON.stringify(err)}`,
				LogLevel.ERROR
			);
			callback(false);
			return;
		}
	}
}
