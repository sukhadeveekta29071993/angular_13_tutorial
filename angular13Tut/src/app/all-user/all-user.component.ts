import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  constructor(private userSer: UserService) {}

  user: {
    id: number;
    name: string;
    age: number;
    city: string;
    job: string;
    image: string;
  }[] = [];

  ngOnInit(): void {
    this.user = this.userSer.user2;
  }

  onShowDetails(user: {
    id: number;
    name: string;
    age: number;
    city: string;
    job: string;
    image: string;
  }) {
    this.userSer.showDetails(user);
  }
}
