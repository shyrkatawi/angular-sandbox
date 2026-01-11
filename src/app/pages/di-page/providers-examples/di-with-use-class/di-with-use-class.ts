import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";
import { ExperimentalLoggerService } from "../../services/experimental-logger.service";

@Component({
  selector: "app-di-with-use-class",
  imports: [],
  templateUrl: "./di-with-use-class.html",
  providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }],
})
export class DiWithUseClass {
  private readonly loggerService = inject(LoggerService);

  protected log(): void {
    this.loggerService.log("DiWithUseClass");
  }
}
