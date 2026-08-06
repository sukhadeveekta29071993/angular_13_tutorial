import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  template: `
    <div class= "header">
      <div class= "image">
        <img src="" [alt]="altText" width="320" height="240">
      </div>
      <div class="slogan">
        <h2>{{ slogan }}</h2>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slogan : string = 'Your  one stop shop everything!'; //from string interpolation
  altText : string = "this is a header image"; //from  property binding
  constructor() { }

  ngOnInit(): void {
  }

}
