import { Injectable } from "@angular/core";
import { ILogger } from "./logger.type";

let instancesCreated = 0;

@Injectable({ providedIn: "root" })
export class ExperimentalLoggerService implements ILogger {
  private readonly instanceId: number;

  constructor() {
    instancesCreated++;
    this.instanceId = instancesCreated;
    console.log(`[ExperimentalLoggerService #${this.instanceId} was created]`);
  }

  public log(message: string): void {
    console.log(`[ExperimentalLoggerService #${this.instanceId}] ${message}`);
  }
}
