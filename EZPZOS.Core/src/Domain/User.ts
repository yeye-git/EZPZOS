import { IUser } from "../Interface/IUser";
import { IUserRole } from "../Interface/IUserRole";
import { DataObject } from "./DataObject";
import { ManagedConfigs } from "./ManagedConfigs";

export class User extends DataObject implements IUser {
	//#region Properties
	public Username: string;
	public Password: string;
	public Email: string;
	public Mobile: string;
	public UserRoleIds: string[];
	public UserRoles: IUserRole[];
	public Salt: string;
	public Avatar: string;
	public Configs: ManagedConfigs;
	//#endregion

	//#region constructor

	//#endregion

	//#region Implementation
	
	//#endregion
}
