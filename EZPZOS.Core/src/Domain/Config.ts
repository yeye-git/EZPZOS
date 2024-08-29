import { IConfig } from "../Interface/IConfig";
import { DataObject } from "./DataObject";

export class Config extends DataObject implements IConfig {
	//#region
	public Name: string;
	public Value: string;
	public Description: string;
	//#endregion
}
