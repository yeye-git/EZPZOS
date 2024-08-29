export declare class LogHandler {
    /**
     *
     * @param className Name of current class initating this constructor
     * @param logLevel LogLevel set to logging, null | undefined otherwise not set, default -> {@link DefaultTargetLogLevel}
     */
    constructor(className: string, logLevel?: number | undefined | null);
    private logLevel;
    private className;
    /**
     *
     * @param functionName Name of Current function that is calling the Log
     * @param message Any Message for the logging
     * @param loglevel Refer to {@link LogLevel}
     * @returns void
     */
    Log(functionName: string, message: string, loglevel: number): void;
}
