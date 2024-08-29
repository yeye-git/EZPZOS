import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { IUserRole } from "../Interface/IUserRole";
import { IDataObject } from "../Interface/IDataObject";
export declare class UserRoleRepository extends BaseRepository implements IRepository {
    Insert(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    GetUserRolesByUserId(id: string, callback: (result: boolean, userRoles: IUserRole[] | null | undefined) => void): Promise<void>;
    GetUserRolesByUserIdPromise(id: string): Promise<IUserRole[] | undefined>;
}
