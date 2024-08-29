import { User } from "../Domain/User";
import { IUser } from "../Interface/IUser";
import { IDataObject } from "../Interface/IDataObject";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
export declare class UserRepository extends BaseRepository implements IRepository {
    Insert(dataObject: IDataObject, callback: (result: boolean, errorCode?: number, errorMessage?: string) => void): Promise<void>;
    Delete(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Update(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    /**
     * Get a single user record by Primary Key [Id]
     * @param id Id of the user to be queried
     * @param callback Result returned from the query. Parameter {result} indicating if the call successed or otherwise. Parameter {user} represents the IUser object or undefined if result is false.
     * @returns void
     */
    GetUserById(id: string, callback: (result: boolean, user: IUser | null | undefined) => void): Promise<void>;
    /**
     * Get a single user record by Mobile number [Mobile]
     * @param mobile Mobile of the user to be queried
     * @param callback Result returned from the query. Parameter {result} indicating if the call succeed or otherwise. Parameter {user} represents the User object or undefined if result is false.
     * @returns void
     */
    GetUserByMobile(mobile: string, callback: (result: boolean, user: User | null | undefined, errorCode?: number, errorMessage?: string) => void): Promise<void>;
    OnSaving(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean) => void): Promise<void>;
    OnSaved(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean, errorCode?: number, errorMessage?: string) => void): Promise<void>;
}
