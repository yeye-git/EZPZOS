import { RoleCode } from "../Enum/RoleCode";
import { IRole } from "../Interface/IRole";
import { DataObject } from "./DataObject";
export declare class Role extends DataObject implements IRole {
    Code: RoleCode;
    Description: string;
}
