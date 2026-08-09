import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../core/model/interface/customer.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customer: ICustomer[] = [
    {
      customerNo: 1,
      customerName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      country: 'USA',
    },
    {
      customerNo: 2,
      customerName: 'Jane Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      country: 'USA',
    },
    {
      customerNo: 3,
      customerName: 'Michael Johnson',
      address: '789 Oak St',
      city: 'Chicago',
      country: 'USA',
    },
    {
      customerNo: 4,
      customerName: 'Emily Davis',
      address: '321 Pine St',
      city: 'Houston',
      country: 'USA',
    },
    {
      customerNo: 5,
      customerName: 'David Wilson',
      address: '654 Cedar St',
      city: 'Phoenix',
      country: 'USA',
    },
  ];

  selectedCustomer: any;
  constructor() {}

  ngOnInit(): void {}
}
