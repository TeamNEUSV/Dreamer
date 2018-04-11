import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service.client';
import {UserService} from '../../../services/user/user.service.client';
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
  constructor(private userService: UserService,
              private eventService: EventService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.eventId = params['eid'];
      this.user = this.userService.findUserById(this.userId);
      console.log('userId: ', this.user._id);
    });
  }

}
