import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service.client';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Event} from '../../../models/event.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-att',
  templateUrl: './event-att.component.html',
  styleUrls: ['./event-att.component.css']
})
export class EventAttComponent implements OnInit {
  userId: string;
  event: Event;
  eventId: string;
  user: User;
  attendees: User[];
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

}
