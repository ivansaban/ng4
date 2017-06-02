import { User } from '../models/user.models';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDetails } from '../login/user-details.model';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {API_BASE} from './api-base.constant';

@Injectable()
export class AuthenticationService {

  currentUser: User;

  constructor(private http: Http, private router: Router) {
  }

  login(userDetails: UserDetails) {
     this.http.post(API_BASE + '/login', userDetails)
       .map(res => <User>res.json())
       .subscribe(user => {
         this.currentUser = user;
         this.router.navigate(['/dashboard']);
       });
  }
}
