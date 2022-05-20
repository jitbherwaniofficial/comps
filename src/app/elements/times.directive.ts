import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();   //TO EMPTY OUT THE CURRENT CONTAINER
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef,{})
    }
  }
}
