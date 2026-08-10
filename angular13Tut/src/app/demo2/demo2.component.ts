import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() value: string = 'Ekta';

  constructor() {
    console.log('constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    console.log(this.value);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }

  ngOnDestroy(): void {
    console.log('ngOndestroy is called');
  }
}
