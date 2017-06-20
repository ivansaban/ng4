import { Component, Injectable, OnInit } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { EditUserRequest } from './edit-user-request.model';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
// import _ from "lodash";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
@Injectable()
export class UserDetailsComponent implements OnInit {

  public editProfileMode: boolean;
  public projectViewMode: boolean;
  public currentUser: User;

  model = new EditUserRequest();

  constructor(private userManagmentService: UserManagementService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.editProfileMode = true;
    this.projectViewMode = false;
    this.currentUser = this.authService.getCurrentUser();
  }

  save() {
    console.log(this.model);
    this.model.username = this.currentUser.username;
    this.model.firstname = this.currentUser.firstname;
    this.model.lastname = this.currentUser.lastname;
    this.model.gender = this.currentUser.gender;
    // if(_.isEq){
    //
    // }
    this.userManagmentService.postEditedUser(this.model);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  onEditProfile(){
    this.editProfileMode = true;
    this.projectViewMode = false;
  }

  onProjectView(){
    this.editProfileMode = false;
    this.projectViewMode = true;
  }
}
