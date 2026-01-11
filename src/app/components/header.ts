import { Component } from "@angular/core";
import { NavLink } from "./nav-link";

@Component({
  selector: "app-header",
  imports: [NavLink],
  templateUrl: "./header.html",
})
export class Header {}
