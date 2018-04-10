import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeEventComponent } from './components/home/home-event/home-event.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventNewComponent } from './components/event/event-new/event-new.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventAttComponent } from './components/event/event-att/event-att.component';
import { PersonComponent } from './components/event/event-att/person/person.component';
import { MessageComponent } from './components/event/event-att/person/message/message.component';
import { InboxComponent } from './components/user/inbox/inbox.component';
import {UserService} from './services/user/user.service.client';
import {EventService} from './services/event/event.service.client';


import { Routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeEventComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    EventListComponent,
    EventNewComponent,
    EventEditComponent,
    EventAttComponent,
    PersonComponent,
    MessageComponent,
    InboxComponent,
    InboxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule,
  ],
  providers: [
    UserService,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
