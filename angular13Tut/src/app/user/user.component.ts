import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { name: string; status: string }[] = [];

  constructor(private userSer: UserService) {}

  ngOnInit(): void {
    this.user = this.userSer.users;
  }
}
