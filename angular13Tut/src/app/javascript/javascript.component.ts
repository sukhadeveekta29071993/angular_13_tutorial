import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../core/services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService],
})
export class JavascriptComponent implements OnInit {
  title: string = 'Javascript';
  constructor(private enrollSer: EnrollService) {}

  ngOnInit(): void {}
  onEnroll() {
    this.enrollSer.onEnrollClicked(this.title);
  }
}
