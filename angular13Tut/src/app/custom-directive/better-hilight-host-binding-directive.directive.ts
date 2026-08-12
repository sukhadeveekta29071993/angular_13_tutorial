import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightHostBindingDirective]',
})
export class BetterHighlightHostBindingDirectiveDirective {
  constructor(
    private ele: ElementRef,
    private render: Renderer2,
  ) {}

  defaultColor: string = 'blue';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.color') color: string = 'white';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') onmouseEnter() {
    this.background = 'yellow';
    this.color = 'red';
    this.border = '2px red solid';
  }

  @HostListener('mouseleave') onmouseout() {
    this.background = this.defaultColor;
    this.color = 'black';
    this.border = '5px pink dotted';
  }
}
