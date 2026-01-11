import { Component, inject } from "@angular/core";
import { LoggerService } from "../../services/logger.service";

@Component({
  selector: "app-di-with-host",
  imports: [],
  templateUrl: "./di-with-host.html",
})
export class DiWithHost {
  private readonly loggerService = inject(LoggerService, { host: true });

  protected log(): void {
    this.loggerService.log("DiWithHost");
  }
}
