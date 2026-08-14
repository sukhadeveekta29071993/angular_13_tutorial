import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css'],
})
export class Data1Component implements OnInit {
  enteredText: string = '';
  constructor(private dataSer: DataService) {}

  ngOnInit(): void {}

  onBtnClick() {
    this.dataSer.raisedBtn(this.enteredText);
  }
}
