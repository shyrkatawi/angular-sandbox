import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";
import { CONFIG_TOKEN } from "../../config.token";
import { ExperimentalLoggerService } from "../../services/experimental-logger.service";

@Component({
  selector: "app-di-with-use-factory",
  imports: [],
  templateUrl: "./di-with-use-factory.html",
  providers: [
    {
      provide: LoggerService,
      useFactory: () => {
        const config = inject(CONFIG_TOKEN);
        if (config.experimentalEnabled) {
          return new ExperimentalLoggerService();
        }
        return new LoggerService();
      },
    },
  ],
})
export class DiWithUseFactory {
  private readonly loggerService = inject(LoggerService);

  protected log(): void {
    this.loggerService.log("DiWithUseFactory");
  }
}
