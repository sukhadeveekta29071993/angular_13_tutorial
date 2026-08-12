import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHoverHostListnerDirective]',
})
export class HoverHostListnerDirectiveDirective implements OnInit {
  constructor(
    private ele: ElementRef,
    private render: Renderer2,
  ) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseHover() {
    this.render.setStyle(this.ele.nativeElement, 'margin', '5px 10px');
    this.render.setStyle(this.ele.nativeElement, 'padding', '30px 10px');
    this.render.setStyle(this.ele.nativeElement, 'fontSize', '40px');
    this.render.setStyle(
      this.ele.nativeElement,
      'transition',
      '0.5s easy-in-out',
    );
  }

  @HostListener('mouseleave') onMouseOut() {
    this.render.setStyle(this.ele.nativeElement, 'color', 'red');
  }
}
