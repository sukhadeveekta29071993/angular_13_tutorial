import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course: any;
  courseId: number = 0;
  routerParams: any;
  editMode: boolean = false;

  constructor(
    private courseSer: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routerParams = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = Number(param.get('id'));
      this.course = this.courseSer.courses.find((c) => c.id === this.courseId);
    });

    // this.editMode = Boolean(
    //   this.activatedRoute.snapshot.queryParamMap.get('edit'),
    // );

    this.activatedRoute.queryParamMap.subscribe((queryParam: any) => {
      this.editMode = Boolean(queryParam.get('edit'));
    });
    console.log(this.editMode);
  }

  appendQuery() {
    this.router.navigate(['/course', this.courseId], {
      queryParams: { edit: true },
    });
  }

  ngOnDestroy(): void {
    this.routerParams.unsubscribe();
  }
}
