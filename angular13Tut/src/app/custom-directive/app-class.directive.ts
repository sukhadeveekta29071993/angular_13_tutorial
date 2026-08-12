import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppClass]',
})
export class AppClassDirective {
  constructor(
    private ele: ElementRef,
    private render: Renderer2,
  ) {}
  @Input('appAppClass') set display(value: object) {
    let entry = Object.entries(value);
    for (const element of entry) {
      if (entry[1]) {
        this.render.addClass(this.ele.nativeElement, element[0]);
      }
    }
  }
}
