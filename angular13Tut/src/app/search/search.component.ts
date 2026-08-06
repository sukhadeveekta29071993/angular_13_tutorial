import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue :string = "";
  search :string = "";
  constructor() { }

  ngOnInit(): void {
  }

  searchData(event:Event){
    this.searchValue = (<HTMLInputElement>event.target).value;
  }

}
