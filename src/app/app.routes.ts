import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/main-page/main-page").then((m) => m.MainPage),
  },
  {
    path: "forms",
    loadComponent: () => import("./pages/forms-page/forms-page").then((m) => m.FormsPage),
    children: [
      {
        path: "template-form",
        loadComponent: () =>
          import("./pages/forms-page/template-form-page/template-form-page").then(
            (m) => m.TemplateFormPage,
          ),
      },
    ],
  },
  {
    path: "di",
    loadComponent: () => import("./pages/di-page/di-page").then((m) => m.DiPage),
  },
  {
    path: "**",
    loadComponent: () =>
      import("./pages/not-found-page/not-found-page").then((m) => m.NotFoundPage),
  },
];
