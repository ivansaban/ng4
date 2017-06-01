import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user-details.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new UserDetails();

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.model);
    this.authService.login(this.model);
  }

}
