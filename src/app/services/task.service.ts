import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_BASE } from './api-base.constant';
/**
 * Created by NIS on 20.6.2017..
 */

@Injectable()
export class TaskService {

  constructor(private  http: Http) {
  }

  putFinishTask(id: number) {
    console.log(id)
    this.http.put(API_BASE + '/finishTask/' + id, {})
      .subscribe(response => {
        if (response.status === 200) {
          alert('Task is successfully finished!');
          window.location.reload();
      }
    });
  }
}
