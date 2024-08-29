import { LogHandler } from "../Handler/LogHandler";
import { IBase } from "../Interface/IBase";
export declare class Base implements IBase {
    constructor(logLevel?: number | undefined | null);
    Logger: LogHandler;
    /**
     *
     * @param {string} classname current classname
     */
    initLogger(classname: string): void;
}
