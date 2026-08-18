import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.css'],
})
export class Courses2Component implements OnInit {
  course: any;
  constructor(
    private courseSer: CourseService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.course = this.courseSer.courses;
  }
}
