import { InjectionToken } from "@angular/core";

export type AppConfig = Readonly<{
  experimentalEnabled: boolean;
}>;

export const CONFIG_TOKEN = new InjectionToken("app.config", {
  providedIn: "root",
  factory: (): AppConfig => ({
    experimentalEnabled: false,
  }),
});
