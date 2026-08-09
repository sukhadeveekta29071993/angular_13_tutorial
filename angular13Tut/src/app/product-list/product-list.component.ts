import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: ' Analog watch',
      price: 109,
      color: 'Silver',
      available: 'available',
      images: '/assets/products/product_1.jpeg',
    },
    {
      id: 2,
      name: 'Dell Laptop',
      price: 50000,
      color: 'Black',
      available: 'available',
      images: '/assets/products/product_2.jpeg',
    },
    {
      id: 3,
      name: 'Wallet',
      price: 100,
      color: 'Brown',
      available: 'available',
      images: '/assets/products/product_3.jpg',
    },
    {
      id: 4,
      name: 'Apple Phone',
      price: 60000,
      color: 'Blue',
      available: 'not Available',
      images: '/assets/products/product_4.jpeg',
    },
    {
      id: 5,
      name: 'Glasses',
      price: 150,
      color: 'White',
      available: 'available',
      images: '/assets/products/product_5.jpeg',
    },
    {
      id: 6,
      name: 'T-shirt',
      price: 200,
      color: 'White',
      available: 'not Available',
      images: '/assets/products/product_6.jpeg',
    },
  ];

  onFilterChanged: string = 'All';
  constructor() {}

  ngOnInit(): void {}

  getAllProduct() {
    return this.products.length;
  }

  getAvailableProduct() {
    return this.products.filter((p) => p.available === 'Available').length;
  }

  getNotAvailableProduct() {
    return this.products.filter((p) => p.available === 'not Available').length;
  }

  onChanged(data: string) {
    this.onFilterChanged = data;
    console.log(this.onFilterChanged);
  }
}
