import { IRepository } from "./IRepository";
import { IProcedureResult, PreparedStatement } from "mssql";
import { Base } from "../Domain/Base";
import { IDataObject } from "../Interface/IDataObject";
export declare class BaseRepository extends Base implements IRepository {
    private ConnectionConfig;
    constructor();
    Execute<T>(sqlQuery: string, dataObject: IDataObject | object, prepareParam: (preparedStatement: PreparedStatement) => PreparedStatement, callback: (err?: Error, recordset?: IProcedureResult<T>) => void): Promise<void>;
    ExecutePromise<T>(sqlQuery: string, dataObject: IDataObject | object, prepareParam: (preparedStatement: PreparedStatement) => PreparedStatement): Promise<IProcedureResult<T> | null | undefined>;
    Insert(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Update(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Delete(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Save(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean, errorCode?: number, errorMessage?: string) => void): Promise<void>;
    OnSaving(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean) => void): Promise<void>;
    OnSaved(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean) => void): Promise<void>;
}
