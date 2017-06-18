import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NewUserRequest } from 'app/user-management/new-user-request.model';
import { API_BASE } from './api-base.constant';
import { EditUserRequest } from 'app/user-details/edit-user-request.model';
/**
 * Created by Sanja on 17.6.2017..
 */

@Injectable()
export class UserManagementService {

  constructor(private  http: Http) {
  }

  postCreateNewUser(newUser: NewUserRequest) {
    this.http.post(API_BASE + '/addUser', newUser)
      .subscribe(response => {
        if (response.status === 200) {
          console.log("Added new user");
        }
      });
  }

  postEditedUser(editedUser: EditUserRequest){
    console.log("Im in save");
    console.log(editedUser);
    this.http.put(API_BASE + '/editUser', editedUser)
      .subscribe(response => {
        if (response.status === 200) {
          console.log("Edited user");
      }
    })
  }
}
