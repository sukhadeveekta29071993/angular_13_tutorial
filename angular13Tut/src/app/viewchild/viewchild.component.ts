import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent implements OnInit {
  @ViewChild('dobInput')
  dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth.nativeElement.value,
    ).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }
}
