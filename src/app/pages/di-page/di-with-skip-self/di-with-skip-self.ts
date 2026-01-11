import { Component, inject } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
  selector: "app-di-with-skip-self",
  imports: [],
  templateUrl: "./di-with-skip-self.html",
  providers: [LoggerService],
})
export class DiWithSkipSelf {
  private readonly loggerServiceSelf = inject(LoggerService, { self: true });
  private readonly loggerServiceSkipSelf = inject(LoggerService, { skipSelf: true });

  protected log(): void {
    this.loggerServiceSelf.log("DiWithSkipSelf, loggerServiceSelf");
    this.loggerServiceSkipSelf.log("DiWithSkipSelf, loggerServiceSkipSelf");
  }
}
