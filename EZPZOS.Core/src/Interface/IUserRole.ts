import { IRole } from "./IRole";

export interface IUserRole {
	//#region Properties
	UserId:string;
	RoleId:string;
	Role:IRole;
	//#endregion
}