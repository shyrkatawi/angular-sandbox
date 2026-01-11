import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";
import { LegacyLogger } from "../../services/legacy-logger";

@Component({
  selector: "app-di-with-use-value",
  imports: [],
  templateUrl: "./di-with-use-value.html",
  providers: [{ provide: LoggerService, useValue: LegacyLogger }],
})
export class DiWithUseValue {
  private readonly loggerService = inject(LoggerService);

  protected log(): void {
    this.loggerService.log("DiWithUseValue");
  }
}
