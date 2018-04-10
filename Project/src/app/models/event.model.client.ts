export class Event {
  _id: string;
  name: string;
  date: Date;
  place: string;
  attendees: string[];
  url: string;
  constructor(_id, name, date, place, attendees, url) {
    this._id = _id;
    this.name = name;
    this.date = date;
    this.place = place;
    this.attendees = attendees;
    this.url = url;
  }
}
