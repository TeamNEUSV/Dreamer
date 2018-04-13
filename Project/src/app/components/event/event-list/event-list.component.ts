import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event.service.client';
import {User} from '../../../models/user.model.client';
import {Event} from '../../../models/event.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  userId: string;
  event: Event;
  // events: Event[] = [
  //   new Event('123',
  //     'Low Complexity Real-Time Simultaneous Localization & Mapping, Velodyne LiDAR',
  //     'Apr 4th, 2018', 'Hacker Dojo', ['123', '234'],
  //     'https://www.meetup.com/IEEE-Robotics-and-Automation-Society/'),
  //   new Event('234', 'The 2nd Shenzhen Innovation & Entrepreneurship International Competition',
  //     'Mar 30th, 2018', 'Santa Clara Convention Center', ['234', '345'],
  //     'https://tinyurl.com/y92lyovb'),
  // ];
  postevents: Event[];
  savedevents: Event[];
  goingevents: Event[];
  user: User;

  constructor(private eventService: EventService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
      // this.user = this.userService.findUserById(this.userId);
      // console.log('userId: ', this.user._id);
      // this.eventService.findSavedEventsByUser(this.userId)
      //   .subscribe(res => {
      //     console.log(res);
      //     this.savedevents = this.savedevents.concat(res);
      //   });

      this.eventService.findGoingEventsByUser(this.userId).subscribe(res => {
        console.log(res);
        this.goingevents = res;
      }, err => {
        alert('Error!'); });
      this.eventService.findPostEventsByUser(this.userId).subscribe(res => {
          console.log(res);
          this.postevents = res;
        }, err => {
       alert('Error!'); });
      this.eventService.findSavedEventsByUser(this.userId).subscribe(res => {
        console.log(res);
        this.postevents = res;
      }, err => {
        alert('Error!');
      });
  }); }
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
