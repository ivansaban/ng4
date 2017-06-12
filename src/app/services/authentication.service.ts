import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDetails } from '../login/user-details.model';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { API_BASE } from './api-base.constant';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {

  currentUser: User;
  loginNotification = new Subject<User>();

  constructor(private http: Http, private router: Router) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

  login(userDetails: UserDetails) {
    this.http.post(API_BASE + '/login', userDetails)
      .subscribe(response => {
        if (response.status === 200) {
          const user = <User>response.json();
          this.currentUser = user;
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.loginNotification.next(this.currentUser);
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        if (error.status === 403 || error.status === 404) {
          alert('Username and/or password are not correct!');
        }
      });
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
