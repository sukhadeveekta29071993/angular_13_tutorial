import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) {}

  @Input() set setStyle(styles: object) {
    let entry = Object.entries(styles);
    for (const elem of entry) {
      this.render.setStyle(this.element.nativeElement, elem[0], elem[1]);
    }
  }
}
