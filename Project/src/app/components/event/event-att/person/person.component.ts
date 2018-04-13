import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../services/event.service.client';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';
import {Event} from '../../../../models/event.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
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
      // this.userService.findUserById(this.userId).subscribe(
      //   res => {
      //     this.user = res;
      //   }, err => {
      //     alert('Error!');
      //   }
      // );
    });
  }

}
