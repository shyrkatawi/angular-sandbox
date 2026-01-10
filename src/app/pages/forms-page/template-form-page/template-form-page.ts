import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInfo } from "./user-info.type";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-template-form-page",
  imports: [FormsModule, JsonPipe],
  templateUrl: "./template-form-page.html",
  styleUrl: "./template-form-page.css",
})
export class TemplateFormPage {
  protected readonly userInfo: UserInfo = {
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    yearOfBirth: 0,
    passport: "",
    fullAddress: "",
    city: "",
    postCode: 0,
  };

  protected get years(): number[] {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => currentYear - i);
  }
}
