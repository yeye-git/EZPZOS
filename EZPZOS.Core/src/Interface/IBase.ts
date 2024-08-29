import { LogHandler } from "../Handler/LogHandler";

export interface IBase {
	Logger: LogHandler;
	initLogger(classname: string): void;
}
