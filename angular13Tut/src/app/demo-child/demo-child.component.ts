import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css'],
})
export class DemoChildComponent implements OnInit, AfterContentInit {
  @ContentChild('heading4') headingEle!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.headingEle.nativeElement);
  }
}
