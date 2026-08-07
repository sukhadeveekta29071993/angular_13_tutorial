import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  siteName:string = 'eShopping'; // string
  isDisplay: boolean = false; // property
  searchData : string = ''; //event
  email_id: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getSearchData(events: Event){
    alert("event fired");
    debugger;
    this.searchData = (<HTMLInputElement>events.target).value
  }

}
