import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css'],
})
export class CourseSearchComponent implements OnInit {
  enterSearchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onChangeSearchValue() {
    this.searchTextChanged.emit(this.enterSearchText);
  }
}
