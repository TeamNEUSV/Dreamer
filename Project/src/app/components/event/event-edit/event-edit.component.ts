import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {EventService} from '../../../services/event.service.client';
@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  userId: string;
  eventId: string;
  event: any;
  name: string;
  date: Date;
  location: string;
  constructor(private userService: UserService,
              private eventService: EventService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.eventId = params['eid'];
    });
  }

  toDelete() {
    this.eventService.deleteEvent(this.eventId).subscribe((event: any) => {
      this.event = event;
      this.router.navigate(['/user/' + this.userId + '/event/']);
    });
  }

  toUpdate() {
    this.eventService.updateEvent(this.eventId, this.event).subscribe((event: any) => {
      this.event = event;
      this.router.navigate(['/user/' + this.userId + '/event/']);
    });
  }

}
