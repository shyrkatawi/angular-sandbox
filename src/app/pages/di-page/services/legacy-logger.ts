import { ILogger } from "./logger.type";

export const LegacyLogger: ILogger = {
  log(message: string): void {
    console.log(`[LegacyLogger] ${message}`);
  },
};
