import { RoleCode } from "../Enum/RoleCode";
import { IRole } from "../Interface/IRole";
import { DataObject } from "./DataObject";

export class Role extends DataObject implements IRole{
	//#region Properties
	public Code: RoleCode;
	public Description: string;
	//#endregion
}