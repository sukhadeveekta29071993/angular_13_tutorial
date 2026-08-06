import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class= "header">
      <div class= "image">
        <img src="" alt="" width="320" height="240">
      </div>
      <div class="slogan">
        <h2>Your  one stop shop everything!</h2>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
