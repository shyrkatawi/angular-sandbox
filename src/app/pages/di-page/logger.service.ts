import { Injectable } from "@angular/core";

let instancesCreated = 0;

@Injectable()
export class LoggerService {
  private readonly instanceId: number;

  constructor() {
    instancesCreated++;
    this.instanceId = instancesCreated;
    console.log(`[LoggerService #${this.instanceId} was created]`);
  }

  public log(message: string): void {
    console.log(`[LoggerService #${this.instanceId}] ${message}`);
  }
}
