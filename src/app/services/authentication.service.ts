import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDetails } from '../login/user-details.model';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { API_BASE } from './api-base.constant';

@Injectable()
export class AuthenticationService {

  currentUser: User;

  constructor(private http: Http, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(userDetails: UserDetails) {
    this.http.post(API_BASE + '/login', userDetails)
      .subscribe(response => {
        if(response.status == 200){
          const user = <User>response.json();
          this.currentUser = user;
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.router.navigate(['/dashboard']);
        }
      });

    // for testing
    // this.currentUser = new User();
    // this.currentUser.firstname = 'Pero';
    // this.currentUser.lastname = 'Perić';
    // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    // this.router.navigate(['/dashboard']);
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
