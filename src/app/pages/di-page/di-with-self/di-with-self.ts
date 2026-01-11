import { Component, inject } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
  selector: "app-di-with-self",
  imports: [],
  templateUrl: "./di-with-self.html",
  providers: [LoggerService],
})
export class DiWithSelf {
  private readonly loggerService = inject(LoggerService, { self: true });

  protected log(): void {
    this.loggerService.log("DiWithSelf");
  }
}
