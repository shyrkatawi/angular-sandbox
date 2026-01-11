import { Component, inject } from "@angular/core";
import { DiWithOptional } from "./di-with-optional/di-with-optional";
import { DiWithSelf } from "./di-with-self/di-with-self";
import { LoggerService } from "./logger.service";
import { DiWithSkipSelf } from "./di-with-skip-self/di-with-skip-self";
import { DiWithHost } from "./di-with-host/di-with-host";

@Component({
  selector: "app-di-page",
  imports: [DiWithOptional, DiWithSelf, DiWithSkipSelf, DiWithHost],
  templateUrl: "./di-page.html",
  providers: [LoggerService],
  viewProviders: [LoggerService],
})
export class DiPage {
  private readonly loggerService = inject(LoggerService);

  protected log(): void {
    this.loggerService.log("DiPage");
  }
}
