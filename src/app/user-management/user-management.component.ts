import { Component, OnInit } from '@angular/core';
import { NewUserRequest } from './new-user-request.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  model = new NewUserRequest();

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.model);
  }

}
