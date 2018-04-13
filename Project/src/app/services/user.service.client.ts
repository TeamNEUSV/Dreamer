import {User} from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  createUser(user: User): Observable<User> {
    const url = 'http://localhost:3000/api/user';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = {
      username: user['username'],
      password: user['password'],
      email: user['email'],
      firstName: user['firstName'],
      lastName: user['lastName']
    }
    return this.http.post<User>(url, JSON.stringify(body), {headers});
  }

  findUserById(userId: String): Observable<User> {
    const url = 'http://localhost:3000/api/user/' + userId;
    return this.http.get<User>(url);
  }

  findUserByEmail(email: string): Observable<User> {
    const url = 'http://localhost:3000/api/user?email=' + email;
    return this.http.get<User>(url);
  }

  findUserByCredentials(email: String, password: String): Observable<User> {
    const url = 'http://localhost:3000/api/user?email=' + email + '&password=' + password;
    return this.http.get<User>(url);
  }

  updateUser(userId: String, user: User): Observable<User> {
    const url = 'http://localhost:3000/api/user/' + userId;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = {
      username: user['username'],
      password: user['password'],
      firstName: user['firstName'],
      lastName: user['lastName']
    }
    return this.http.put<User>(url, JSON.stringify(body), {headers});
  }

  deleteUser(userId): Observable<User> {
    const url = 'http://localhost:3000/api/user/' + userId;
    return this.http.delete<User>(url);
  }
}
