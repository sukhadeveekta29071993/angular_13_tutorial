import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHiLightDirective]',
})
export class HiLightDirectiveDirective {
  constructor(
    private ele: ElementRef,
    private render: Renderer2,
  ) {}

  @Input() set appHiLight(condition: Boolean) {
    if (condition) {
      this.render.addClass(this.ele.nativeElement, 'highlight');
    }
  }
}
