import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {EventService} from '../../../services/event.service.client';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {
  userId: string;
  event: {};
  eventName: string;
  eventDate: Date;
  eventPlace: string;
  constructor(private userService: UserService,
              private eventService: EventService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.userId = params['uid'];
    });
  }
  toProfile() {
    this.router.navigate(['/user/' + this.userId]);
  }
  dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    var div = document.getElementById('myDropdown');
    a = div.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = '';
      } else {
        a[i].style.display = 'none';
      }
    }
  }
  addEvent() {
    this.event = {name: this.eventName, date: this.eventDate, location: this.eventPlace};
    // this.event['name'] = this.eventName;
    // this.event['date'] = this.eventDate;
    // this.event['location'] = this.eventPlace;
    this.eventService.createEvent(this.userId, this.event).subscribe(
      res => {
        this.event = res;
      }, err => {
        alert('Error!');
      }
    )
    this.router.navigate(['/user/' + this.userId + '/event']);
  }
  toEventList() {
    this.router.navigate(['/user/' + this.userId + '/event']);
  }
}
