import { NVarChar, UniqueIdentifier } from "mssql";
import { LogLevel } from "../Common/Constants";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { IDataObject } from "../Interface/IDataObject";
import { Event } from "../Domain/Event";
import { PreparedStatementHandler } from "../Handler/PrepareStatementHandler";

export class EventRepository extends BaseRepository implements IRepository {
	public override async Update(dataObject: IDataObject, callback: (result: boolean) => void) {
		this.Logger.Log("Update", "Updating Event", LogLevel.DEBUG);

		let sql = `Update [dbo].[Event] 
		set [EventCode]=@EventCode,
			[EventTime]=@EventTime,
			[ParentId]=@ParentId,
			[ParentTable]=@ParentTable,
			[CreatedTimestamp]=@CreatedTimestamp,
			[UpdatedTimestamp]=@UpdatedTimestamp,
			[IsDeleted]=@IsDeleted,
			[CreatedUserId]=@CreatedUserId,
			[UpdatedUserId]=@UpdatedUserId 
		where [Id]=@Id`;

		this.Execute(
			sql,
			dataObject,
			preparedStatement => PreparedStatementHandler.EventPrepareStatementInput(preparedStatement),
			(err, result) => {
				if (err) {
					this.Logger.Log(
						"Update",
						`Error Updating Event: ${JSON.stringify(dataObject)}
						Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				} else if (result?.rowsAffected[0] == 1) {
					this.Logger.Log("Update", `Event Updated.`, LogLevel.DEBUG);
					callback(true);
				} else {
					this.Logger.Log(
						"Update",
						`Error Updating Event Object: ${JSON.stringify(dataObject)}
						Result: ${JSON.stringify(result)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				}
			}
		);
	}

	public override async Insert(dataObject: IDataObject, callback: (result: boolean) => void) {
		this.Logger.Log("Insert", "Inserting Event", LogLevel.DEBUG);

		let sql = `
		Insert into [dbo].[Event](
			[Id],
			[EventCode],
			[EventTime],
			[ParentId],
			[ParentTable],
			[CreatedTimestamp],
			[UpdatedTimestamp],
			[IsDeleted],
			[CreatedUserId],
			[UpdatedUserId])
		Values(
			@Id,
			@EventCode,
			@EventTime,
			@ParentId,
			@ParentTable,
			@CreatedTimestamp,
			@UpdatedTimestamp,
			@IsDeleted,
			@CreatedUserId,
			@UpdatedUserId)`;

		this.Execute(
			sql,
			dataObject,
			preparedStatement => PreparedStatementHandler.EventPrepareStatementInput(preparedStatement),
			(err, result) => {
				if (err) {
					this.Logger.Log(
						"Insert",
						`Error Inserting Event: ${JSON.stringify(dataObject)}
						Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				} else if (result?.rowsAffected[0] == 1) {
					this.Logger.Log("Insert", `Event Inserted.`, LogLevel.DEBUG);
					callback(true);
					return;
				} else {
					this.Logger.Log(
						"Insert",
						`Error Inserting Event Object: ${JSON.stringify(dataObject)}
						Result: ${JSON.stringify(result)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				}
			}
		);
	}

	public override async Delete(dataObject: IDataObject, callback: (result: boolean) => void) {
		this.Logger.Log("Delete", "Deleting Event", LogLevel.DEBUG);

		let sql = `Delete from [dbo].[Event] where [Id]=@Id`;

		this.Execute(
			sql,
			dataObject,
			preparedStatement => preparedStatement.input("Id", UniqueIdentifier),
			(err, result) => {
				if (err) {
					this.Logger.Log(
						"Delete",
						`Error Deleting Event: ${JSON.stringify(dataObject)}
						Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				} else if (result?.rowsAffected[0] == 1) {
					this.Logger.Log("Delete", `Event Deleted.`, LogLevel.DEBUG);
					callback(true);
					return;
				} else {
					this.Logger.Log(
						"Delete",
						`Error Deleting Event Object: ${JSON.stringify(dataObject)}
						Result: ${JSON.stringify(result)}`,
						LogLevel.ERROR
					);
					callback(false);
					return;
				}
			}
		);
	}

	public async GetEventsByParentId(
		id: string,
		callback: (results: boolean, events: Event[] | undefined | null) => void
	) {
		this.Logger.Log("GetEventsByParentId", "Getting Events By Parent Id", LogLevel.DEBUG);

		// Preparing insert query
		let query = `Select * from [dbo].[Event] Where [ParentId] = @Id`;

		// Execute Query with parameters
		await this.Execute(
			query,
			{ Id: id },
			preparedStatement => {
				return preparedStatement.input("Id", UniqueIdentifier);
			},
			async (err, result) => {
				if (err) {
					this.Logger.Log(
						"GetEventsByParentId",
						`Error Events By Parent Id: ${id}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					if (result && result.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetEventsByParentId", `Events Found.`, LogLevel.DEBUG);
						let events = result.recordsets[0] as Event[];
						callback(true, events);
					} else {
						this.Logger.Log(
							"GetEventsByParentId",
							`Error Getting Events By Parent Id: ${id}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	public override async OnSaved(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	): Promise<void> {
		// Skip saving event for event thus don't call super
		callback(true);
		return;
	}
}
