import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appIf]",
})
export class MyNgIf<T = unknown> {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);

  public readonly appIf = input<boolean>(false);
  public readonly appIfElse = input<TemplateRef<T> | null>(null);

  constructor() {
    effect(() => {
      this.viewContainerRef.clear();

      if (this.appIf()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        return;
      }

      const elseTemplate = this.appIfElse();
      if (elseTemplate) {
        this.viewContainerRef.createEmbeddedView(elseTemplate);
      }
    });
  }
}
