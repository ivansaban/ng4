/**
 * Created by Sanja on 7.6.2017..
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_BASE } from './api-base.constant';
import { UserProject } from '../models/user-project.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private http: Http){
  }

  getProjectForUser(userId:number): Observable<UserProject[]> {
      return this.http.get(API_BASE + '/getProjects/' + userId )
        .map(response => <UserProject[]> response.json());
  }
}
