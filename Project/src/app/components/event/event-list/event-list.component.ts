import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event/event.service.client';
import {User} from '../../../models/user.model.client';
import {Event} from '../../../models/event.model.client';
import {UserService} from '../../../services/user/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  userId: string;
  event: Event;
  postevents: Event[] = [];
  savedevents: Event[] = [];
  pastevents: Event[] = [];
  goingevents: Event[] = [];
  user: User;

  constructor(private userService: UserService,
              private eventService: EventService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.user = this.userService.findUserById(this.userId);
      console.log('userId: ', this.user._id);

      this.eventService.findSavedEventsByUser(this.userId)
        .subscribe(res => {
          console.log(res);
          this.savedevents = this.savedevents.concat(res);
        });
      this.eventService.findPastEventsByUser(this.userId).subscribe( res => {
        this.pastevents = this.pastevents.concat(res);
      });
      this.eventService.findGoingEventsByUser(this.userId).subscribe(res => {
        console.log(res);
        this.goingevents = this.goingevents.concat(res);
      });
        this.eventService.findPostEventsByUser(this.userId).subscribe(res => {
          console.log(res);
          this.postevents = this.postevents.concat(res);
        });
  });
  }
  toNewEvent() {
    this.router.navigate(['/user/' + this.userId + '/event/new']);
  }
  toAttendees(eid) {
    this.router.navigate(['/user/' + this.userId + '/event/' + eid + '/attendee']);
  }
  toProfile() {
    this.router.navigate(['/user/' + this.userId]);
  }

}
