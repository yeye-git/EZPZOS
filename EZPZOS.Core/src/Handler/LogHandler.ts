import {
	LogLevel,
	LogLevelToString,
	DefaultTargetLogLevel,
	LogFilePath,
	LogFileName,
	Platform
} from "../Common/Constants";

import * as fs from "fs";

export class LogHandler {
	/**
	 *
	 * @param className Name of current class initating this constructor
	 * @param logLevel LogLevel set to logging, null | undefined otherwise not set, default -> {@link DefaultTargetLogLevel}
	 */
	constructor(className: string, logLevel: number | undefined | null = null) {
		this.className = className;
		if (logLevel === null || logLevel === undefined) this.logLevel = DefaultTargetLogLevel;
		else this.logLevel = logLevel;
		if (process.env.PLATFORM !== Platform.Web) {
			if (!fs.existsSync(LogFilePath)) {
				fs.mkdirSync(LogFilePath);
			}

			if (!fs.existsSync(LogFilePath + "\\" + LogFileName)) {
				fs.openSync(LogFilePath + "\\" + LogFileName, "wx");
			}
		}
	}

	private logLevel: number;
	private className: string;

	/**
	 *
	 * @param functionName Name of Current function that is calling the Log
	 * @param message Any Message for the logging
	 * @param loglevel Refer to {@link LogLevel}
	 * @returns void
	 */
	Log(functionName: string, message: string, loglevel: number) {
		let log = `[${new Date().toLocaleString("en-AU")}]\r\n[${this.className}.${functionName}] [${
			LogLevelToString[loglevel] ?? "ERROR"
		}]: ${message}\r\n`;

		if (loglevel >= this.logLevel) return;
		console.log(log);

		if (process.env.PLATFORM !== Platform.Web) {
			try {
				fs.writeFileSync(LogFilePath + "/" + LogFileName, log + "\r\n", { flag: "a" });
			} catch (ex) {
				console.log(`Error Logging to file path: ${LogFilePath + "/" + LogFileName}`);
			}
		}
	}
}
