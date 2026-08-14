import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css'],
})
export class Data2Component implements OnInit {
  inputText: string = '';
  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    this.dataSer.dataEmitter.subscribe((res) => {
      this.inputText = res;
    });
  }
}
