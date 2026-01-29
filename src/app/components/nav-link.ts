import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-nav-link",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./nav-link.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLink {
  public readonly label = input.required<string>();
  public readonly path = input.required<string>();
  public readonly exact = input(false);
}
