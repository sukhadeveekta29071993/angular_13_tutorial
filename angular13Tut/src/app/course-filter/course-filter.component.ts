import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css'],
})
export class CourseFilterComponent implements OnInit {
  @Input() all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;
  onSelectedRadioButton: string = 'All';
  @Output() filterCourseRadioChanged: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onChangeRadio() {
    this.filterCourseRadioChanged.emit(this.onSelectedRadioButton);
  }
}
