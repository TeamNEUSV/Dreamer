export class User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  postevents: string[];
  savedevents: string[];
  goingevents: string[];
  constructor(_id, username, email, password, firstName, lastName, postevents, savedevents, goingevents) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.savedevents = savedevents;
    this.goingevents = goingevents;
    this.postevents = postevents;
  }
}
