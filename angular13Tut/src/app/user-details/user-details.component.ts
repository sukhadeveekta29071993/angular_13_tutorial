import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: {
    id: number;
    name: string;
    age: number;
    city: string;
    job: string;
    image: string;
  }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.onShowDetailsClicked.subscribe(
      (user: {
        id: number;
        name: string;
        age: number;
        city: string;
        job: string;
        image: string;
      }) => {
        this.user = [user];
      },
    );
  }
}
