import { IProcedureResult, PreparedStatement } from "mssql";
import { IDataObject } from "../Interface/IDataObject";

export interface IRepository {
	/**
	 * Insert a DataObject into the Database
	 * @param dataObject {@link IDataObject} interfaced Objects to be inserted
	 * @param callback Get the result of the insert operation
	 * @returns void
	 */
	Insert(dataObject: IDataObject, callback: (result: boolean) => void): void;
	/**
	 * Update a DataObject into the Database
	 * @param dataObject {@link IDataObject} interfaced Objects to be updated
	 * @param callback Get the result of the update operation
	 * @returns void
	 */
	Update(dataObject: IDataObject, callback: (result: boolean) => void): void;
	/**
	 * Delete a DataObject into the Database
	 * @param dataObject {@link IDataObject} interfaced Objects to be deleted
	 * @param callback Get the result of the delete operation
	 * @returns void
	 */
	Delete(dataObject: IDataObject, callback: (result: boolean) => void): void;

	/**
	 * This function is used to save the data to the database. It will check for the existence of the data and either insert or update the data.
	 * @param dataobject {@link IDataObject} interfaced Objects to be Saved
	 * @param userId User Id of the user performing the operation
	 * @param isUpdate Whether to update the data or insert the data
	 * @param isDelete Whether to delete the data or not
	 * @param callback Get the result of the insert operation
	 */
	Save(
		dataobject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	): void;

	/**
	 * Run other functions before saving the dataobject
	 * @param dataObject {@link IDataObject} interfaced Objects to be deleted
	 * @param userId User Id of the user performing the operation
	 * @param isUpdate Whether to update the data or insert the data
	 * @param isDelete Whether to delete the data or not
	 * @param callback Get the result of the delete operation
	 */
	OnSaving(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	): void;

	/**
	 * Run other functions after dataobject is saved
	 * @param dataObject {@link IDataObject} interfaced Objects to be deleted
	 * @param userId User Id of the user performing the operation
	 * @param isUpdate Whether to update the data or insert the data
	 * @param isDelete Whether to delete the data or not
	 * @param callback Get the result of the delete operation
	 */
	OnSaved(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	): void;
	/**
	 * Executes Parametered Query
	 * @param sqlQuery SQL Query to be executed
	 * @param dataObject {@link IDataObject} Interfaced Object to be parsed into the query. Or any object
	 * @param prepareParam refer to {@link IDataObject.PrepareStatementInput}. Prepare parameters for input query statement.
	 * @param callback Result returned from the executed query.
	 * @returns void
	 */
	Execute<T>(
		sqlQuery: string,
		dataObject: IDataObject | object,
		prepareParam: (preparedStatement: PreparedStatement) => PreparedStatement,
		callback: (err?: Error, recordset?: IProcedureResult<T>) => void
	): void;
}
