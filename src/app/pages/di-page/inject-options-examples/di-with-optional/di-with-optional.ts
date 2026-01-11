import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";

@Component({
  selector: "app-di-with-optional",
  imports: [],
  templateUrl: "./di-with-optional.html",
})
export class DiWithOptional {
  private readonly loggerService = inject(LoggerService, { optional: true });
  protected readonly isLoggerAvailable: boolean = !!this.loggerService;

  protected log(): void {
    if (this.loggerService) {
      this.loggerService.log("DiWithOptional");
    }
  }
}
