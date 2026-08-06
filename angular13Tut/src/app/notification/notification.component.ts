import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-notification',
  templateUrl: './notification.component.html',
  styles: [`
    div{
    margin:10px 0px;
    padding: 10px 20px;
    text-align:center;
    }
    p{
    font-size:20px;
    }
    .close{
    float:right;
    margin-top:-15px;
    }
   
    `
  ]
})
export class NotificationComponent implements OnInit {
  isDisplay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeNotification(){
    console.log("event called");
    
    this.isDisplay = true;
  }

}
