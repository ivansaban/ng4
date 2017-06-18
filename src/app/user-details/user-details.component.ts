import { Component, Injectable, OnInit } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';
import { EditUserRequest } from './edit-user-request.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
@Injectable()
export class UserDetailsComponent implements OnInit {

  public editProfileMode: boolean;
  public projectViewMode: boolean;

  model = new EditUserRequest();

  constructor(private userManagmentService: UserManagementService) { }

  ngOnInit() {
    this.editProfileMode = true;
    this.projectViewMode = false;
  }

  save(){
    console.log(this.model);
    this.userManagmentService.postEditedUser(this.model);
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
