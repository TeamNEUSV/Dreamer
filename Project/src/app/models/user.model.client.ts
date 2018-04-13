export class User {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  constructor(username, email, password, firstName, lastName) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
