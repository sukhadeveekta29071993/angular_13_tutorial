import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses = [
    {
      id: 1,
      name: 'Angular 13',
      price: 4999,
      type: 'Premium',
      image: 'assets/images/angular.png',
      description: 'Learn Angular 13 from basics to advanced concepts.',
    },
    {
      id: 2,
      name: 'React JS',
      price: 3999,
      type: 'Premium',
      image: 'assets/images/react.png',
      description: 'Learn React JS, components, hooks and API integration.',
    },
    {
      id: 3,
      name: 'Node JS',
      price: 4499,
      type: 'Premium',
      image: 'assets/images/nodejs.png',
      description: 'Learn Node JS and build REST APIs using Express.',
    },
    {
      id: 4,
      name: 'JavaScript',
      price: 0,
      type: 'Free',
      image: 'assets/images/javascript.png',
      description: 'Learn JavaScript fundamentals, ES6 and advanced concepts.',
    },
    {
      id: 5,
      name: 'Full Stack Development',
      price: 9999,
      type: 'Premium',
      image: 'assets/images/fullstack.png',
      description: 'Learn frontend, backend, database and API integration.',
    },
    {
      id: 6,
      name: 'HTML & CSS',
      price: 0,
      type: 'Free',
      image: 'assets/images/html-css.png',
      description: 'Learn responsive web design using HTML5 and CSS3.',
    },
    {
      id: 7,
      name: 'TypeScript',
      price: 3499,
      type: 'Premium',
      image: 'assets/images/typescript.png',
      description:
        'Learn TypeScript including types, interfaces, classes and generics.',
    },
    {
      id: 8,
      name: 'Bootstrap',
      price: 0,
      type: 'Free',
      image: 'assets/images/bootstrap.png',
      description: 'Learn Bootstrap and create responsive modern websites.',
    },
    {
      id: 9,
      name: 'Tailwind CSS',
      price: 2999,
      type: 'Premium',
      image: 'assets/images/taliwind.png',
      description:
        'Learn Tailwind CSS and build modern responsive user interfaces.',
    },
    {
      id: 10,
      name: 'Express JS',
      price: 3499,
      type: 'Premium',
      image: 'assets/images/express.png',
      description: 'Learn Express JS and create scalable REST APIs.',
    },
    {
      id: 11,
      name: 'MongoDB',
      price: 0,
      type: 'Free',
      image: 'assets/images/mongodb.png',
      description:
        'Learn MongoDB database, collections, queries and CRUD operations.',
    },
    {
      id: 12,
      name: 'MySQL',
      price: 3499,
      type: 'Premium',
      image: 'assets/images/mysql.png',
      description:
        'Learn MySQL database, SQL queries, joins and database design.',
    },
    {
      id: 13,
      name: 'Git & GitHub',
      price: 0,
      type: 'Free',
      image: 'assets/images/git-github.png',
      description:
        'Learn Git and GitHub including repositories, branches and deployment.',
    },
    {
      id: 14,
      name: 'REST API',
      price: 2999,
      type: 'Premium',
      image: 'assets/images/rest-api.png',
      description:
        'Learn REST APIs, HTTP methods, JSON, CRUD and API integration.',
    },
    {
      id: 15,
      name: 'Firebase',
      price: 3999,
      type: 'Premium',
      image: 'assets/images/firebase.png',
      description:
        'Learn Firebase authentication, FireStore, hosting and storage.',
    },
  ];
  onChange: string = 'All';
  searchValue: string = '';
  constructor() {}

  ngOnInit(): void {}

  getTotalCourses() {
    return this.courses.length;
  }
  getFreeCourses() {
    return this.courses.filter((free) => free.type === 'Free').length;
  }

  getPremiumCourses() {
    return this.courses.filter((premium) => premium.type === 'Premium').length;
  }

  selectedData(data: string) {
    this.onChange = data;
    console.log(this.onChange);
  }

  SearchData(data: string) {
    this.searchValue = data;
  }
}
