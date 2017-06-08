/**
 * Created by Sanja on 7.6.2017..
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_BASE } from './api-base.constant';
import { UserProject } from '../models/user-project.model';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getProjectForUser(userId: number): Observable<UserProject[]> {
    return this.http.get(API_BASE + '/getProjects/' + userId)
      .map(response => <UserProject[]> response.json());
  }

  getTasksForProject(userId: number, projectId: number): Observable<Task[]> {
    return this.http.get(API_BASE + '/getTasks/' + userId + '/' + projectId)
      .map(response => <Task[]> response.json());
  }

  getUserNumberStatistics(): Observable<{allUsers: number, maleUsers: number, femaleUsers: number}>{
    return this.http.get(API_BASE + '/getAllUsers')
      .map(response => {
        const body = response.json();
        return {allUsers: body.allUsers, maleUsers: body.maleUsers, femaleUsers: body.femaleUsers};
      });
  }
}
