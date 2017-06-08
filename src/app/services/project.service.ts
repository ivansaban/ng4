/**
 * Created by Sanja on 7.6.2017..
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_BASE } from './api-base.constant';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  constructor(private http: Http) {
  }

  getTasksForProjectWithStatus(projectId: number, status: string): Observable<Task[]> {
    return this.http.get(API_BASE + '/getProjectTasks/'+ projectId + '/' + status )
      .map(response => <Task[]> response.json());
  }

  getStakeHolders(projectId: number): Observable<{username: string, taskCount: number, finishedPercentage: number}[]>{
    return this.http.get(API_BASE + '/getProjectStakeholders/' + projectId)
      .map(stakeHolders => {
        const stakeHold = stakeHolders.json();
        return <{username: string, taskCount: number, finishedPercentage: number}[]> stakeHold;
        }
      )
  }
}
