import { Component, inject } from "@angular/core";
import { DiWithOptional } from "./inject-options-examples/di-with-optional/di-with-optional";
import { DiWithSelf } from "./inject-options-examples/di-with-self/di-with-self";
import { LoggerService } from "./services/logger.service";
import { DiWithSkipSelf } from "./inject-options-examples/di-with-skip-self/di-with-skip-self";
import { DiWithHost } from "./inject-options-examples/di-with-host/di-with-host";
import { DiWithUseClass } from "./providers-examples/di-with-use-class/di-with-use-class";
import { DiWithUseExisting } from "./providers-examples/di-with-use-existing/di-with-use-existing";
import { DiWithUseFactory } from "./providers-examples/di-with-use-value/di-with-use-factory";
import { DiWithUseValue } from "./providers-examples/di-with-use-factory/di-with-use-value";

@Component({
  selector: "app-di-page",
  imports: [
    DiWithOptional,
    DiWithSelf,
    DiWithSkipSelf,
    DiWithHost,
    DiWithUseClass,
    DiWithUseExisting,
    DiWithUseFactory,
    DiWithUseValue,
  ],
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
