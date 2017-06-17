import { Component, OnInit } from '@angular/core';
import { NewUserRequest } from './new-user-request.model';
import { UserManagementService } from '../services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  model = new NewUserRequest();

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.model);
    this.userManagementService.postCreateNewUser(this.model);
  }

}
