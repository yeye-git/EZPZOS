import { LogHandler } from "../Handler/LogHandler";
import { IBase } from "../Interface/IBase";

export class Base implements IBase {
	constructor(logLevel: number | undefined | null = null) {
		this.Logger = new LogHandler("Base", logLevel);
	}
	public Logger: LogHandler;
	/**
	 *
	 * @param {string} classname current classname
	 */
	public initLogger(classname: string): void {
		this.Logger = new LogHandler(classname);
	}
}
