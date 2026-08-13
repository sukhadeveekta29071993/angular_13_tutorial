import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../core/services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent implements OnInit {
  title: string = 'Angular';
  constructor() {}

  ngOnInit(): void {}
  onEnroll() {
    const enrollService = new EnrollService();
    enrollService.onEnrollClicked(this.title);
  }
}
