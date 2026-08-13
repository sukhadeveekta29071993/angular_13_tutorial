import { Injectable } from '@angular/core';
import { LoggerService } from './loggeer.service';

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

  users = [
    { name: 'john', status: 'active' },
    { name: 'mark', status: 'inactive' },
    { name: 'steve', status: 'active' },
  ];

  createUser(name: string, status: string) {
    this.users.push({
      name: name,
      status: status,
    });
    this.logger.logMessage(name, status);
  }
}
