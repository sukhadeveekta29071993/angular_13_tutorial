import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit {
  products = [
    {id:1, name:"MiniMalists Analog watch", price:109, color:"Silver", available:"Available", images:"/assets/products/product_1.jpeg"},
    {id:2, name:"Dell Laptop", price:50000, color:"Black", available:"Available", images:"/assets/products/product_2.jpeg"},
    {id:3, name:"Wallet", price:100, color:"Brown", available:"Available", images:"/assets/products/product_3.jpg"},
    {id:4, name:"Apple Phone", price:60000, color:"Blue", available:"Not Available", images:"/assets/products/product_4.jpeg"},
    {id:5, name:"Glasses", price:150, color:"White", available:"Available", images:"/assets/products/product_5.jpeg"},
    {id:6, name:"T-shirt", price:200, color:"White",available:"Not Available", images:"/assets/products/product_6.jpeg"}
  ];
  displayNotification : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeNotification(){
    this.displayNotification = true;
  }

}
