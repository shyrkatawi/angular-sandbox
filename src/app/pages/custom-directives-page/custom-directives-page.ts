import { Component, signal } from "@angular/core";
import { MyNgIf } from "../../directives/my-ng-if/my-ng-if";

@Component({
  selector: "app-custom-directives-page",
  imports: [MyNgIf],
  templateUrl: "./custom-directives-page.html",
})
export class CustomDirectivesPage {
  protected readonly ifState = signal<boolean>(true);

  protected changeIfState(): void {
    this.ifState.update((value) => !value);
  }
}
