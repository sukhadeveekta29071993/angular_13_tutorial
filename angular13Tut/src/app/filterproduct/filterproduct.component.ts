import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css'],
})
export class FilterproductComponent implements OnInit {
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;
  selectRadioButton: string = 'All';
  @Output() filterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  changedFilterRadioButton() {
    this.filterRadioButtonChanged.emit(this.selectRadioButton);
  }
}
