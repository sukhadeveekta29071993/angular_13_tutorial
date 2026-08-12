import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRender]',
})
export class HighlightRenderDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private ele: ElementRef,
  ) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'red');
    this.renderer.addClass(this.ele.nativeElement, 'wrapper');
    this.renderer.setAttribute(
      this.ele.nativeElement,
      'title',
      'this is a paragraph create with renderer',
    );
  }
}
