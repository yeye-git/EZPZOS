import { Role } from "../Domain/Role";
import { IUserRole } from "../Interface/IUserRole";
import { DataObject } from "./DataObject";

export class UserRole extends DataObject implements IUserRole {
	//#region Properties
	public UserId: string;
	public RoleId: string;
	public Role: Role;
	//#endregion
}
