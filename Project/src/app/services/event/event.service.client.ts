import {User} from '../../models/user.model.client';
import {UserService} from '../user/user.service.client';
import {Event} from '../../models/event.model.client';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import {users} from '../user/user.mock.client';
import {events} from './event.mock.client';

@Injectable()
export class EventService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http,
              private userService: UserService) {
    this.http = http;
  }

  events: Event[] = events;
  api = {
    'findSavedEventssByUser': this.findSavedEventsByUser,
    'findGoingEventsByUser': this.findGoingEventsByUser,
    'findPostEventsByUser' : this.findPostEventsByUser,
  };
  findPostEventsByUser(userId: string) {
    const user: User = this.userService.findUserById(userId);
    const list: string[] = user.postevents;
    return from(this.events).pipe(filter(event => list.indexOf(event._id) > -1));
  }
  findSavedEventsByUser(userId: string) {
    const user: User = this.userService.findUserById(userId);
    const list: string[] = user.savedevents;
    return from(this.events).pipe(filter(event => list.indexOf(event._id) > -1));
  }
  findGoingEventsByUser(userId: string) {
    const user: User = this.userService.findUserById(userId);
    const list: string[] = user.goingevents;
    return from(this.events).pipe(filter(event => list.indexOf(event._id) > -1));
  }
}
