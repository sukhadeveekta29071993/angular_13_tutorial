import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './loggeer.service';

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

  users = [
    { name: 'john', status: 'active' },
    { name: 'mark', status: 'inactive' },
    { name: 'steve', status: 'active' },
  ];

  user2 = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 25,
      city: 'Pune',
      job: 'Frontend Developer',
      image: 'assets/user/user-1.png',
    },
    {
      id: 2,
      name: 'Neha Patil',
      age: 28,
      city: 'Mumbai',
      job: 'UI/UX Designer',
      image: 'assets/user/user-2.png',
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      age: 24,
      city: 'Nashik',
      job: 'Software Developer',
      image: 'assets/user/user-3.png',
    },
    {
      id: 4,
      name: 'Riya Deshmukh',
      age: 27,
      city: 'Nagpur',
      job: 'Web Designer',
      image: 'assets/user/user-4.png',
    },
  ];

  onShowDetailsClicked = new EventEmitter<{
    id: number;
    name: string;
    age: number;
    city: string;
    job: string;
    image: string;
  }>();

  createUser(name: string, status: string) {
    this.users.push({
      name: name,
      status: status,
    });
    this.logger.logMessage(name, status);
  }

  showDetails(user: {
    id: number;
    name: string;
    age: number;
    city: string;
    job: string;
    image: string;
  }) {
    this.onShowDetailsClicked.emit(user);
  }
}
