import { IUser } from "../Interface/IUser";
import { IUserRole } from "../Interface/IUserRole";
import { DataObject } from "./DataObject";
import { ManagedConfigs } from "./ManagedConfigs";
export declare class User extends DataObject implements IUser {
    Username: string;
    Password: string;
    Email: string;
    Mobile: string;
    UserRoleIds: string[];
    UserRoles: IUserRole[];
    Salt: string;
    Avatar: string;
    Configs: ManagedConfigs;
}
