import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackgroundAttribute]',
})
export class SetBackgroundDirective implements OnInit {
  constructor(private ele: ElementRef) {
    // ele.nativeElement.style.backgroundColor = '#508305';
  }

  ngOnInit(): void {
    this.ele.nativeElement.style.backgroundColor = '#508305';
  }
}
