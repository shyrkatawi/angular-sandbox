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
      // {
      //   path: "sync-with-query-params-form",
      //   loadComponent: () =>
      //     import("./pages/forms-page/sync-with-query-params-form-page/sync-with-query-params-form-page").then(
      //       (m) => m.SyncWithQueryParamsFormPage,
      //     ),
      // },
    ],
  },
  {
    path: "di",
    loadComponent: () => import("./pages/di-page/di-page").then((m) => m.DiPage),
  },
  {
    path: "custom-directives",
    loadComponent: () =>
      import("./pages/custom-directives-page/custom-directives-page").then(
        (m) => m.CustomDirectivesPage,
      ),
  },
  // {
  //   path: "pony-race",
  //   loadComponent: () => import("./pages/pony-race/pony-race-page").then((m) => m.PonyRacePage),
  // },
  {
    path: "**",
    loadComponent: () =>
      import("./pages/not-found-page/not-found-page").then((m) => m.NotFoundPage),
  },
];
