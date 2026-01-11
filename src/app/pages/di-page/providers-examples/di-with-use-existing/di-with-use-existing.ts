import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";
import { ExperimentalLoggerService } from "../../services/experimental-logger.service";

@Component({
  selector: "app-di-with-use-existing",
  imports: [],
  templateUrl: "./di-with-use-existing.html",
  providers: [{ provide: LoggerService, useExisting: ExperimentalLoggerService }],
})
export class DiWithUseExisting {
  private readonly loggerService = inject(LoggerService);

  protected log(): void {
    this.loggerService.log("DiWithUseExisting");
  }
}
