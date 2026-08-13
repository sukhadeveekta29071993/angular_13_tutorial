export class LoggerService {
  logMessage(name: string, status: string) {
    alert(
      'A new user added with username ' +
        name +
        ' and the status of user is ' +
        status +
        ' has been added',
    );
  }
}
