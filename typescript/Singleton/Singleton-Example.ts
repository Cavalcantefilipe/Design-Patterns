class Logger {
  private static instance: Logger;
  private static _logger: string[];

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      Logger._logger = [];
    }
    return Logger.instance;
  }

  set logger(message: string) {
    const timestamp = new Date();
    Logger._logger.push(`[${timestamp.toLocaleString()}] ${message}`);
  }
  get logger(): string[] {
    return Logger._logger;
  }
}

let logger1 = Logger.getInstance();
let logger2 = Logger.getInstance();
logger1.logger = "This is the first log message.";
logger2.logger = "This is the second log message.";
console.log(logger1.logger);
