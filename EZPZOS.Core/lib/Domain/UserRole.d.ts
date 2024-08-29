import { Role } from "../Domain/Role";
import { IUserRole } from "../Interface/IUserRole";
import { DataObject } from "./DataObject";
export declare class UserRole extends DataObject implements IUserRole {
    UserId: string;
    RoleId: string;
    Role: Role;
}
