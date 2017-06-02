import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user : User;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.user = new User();

    this.user = this.authService.getCurrentUser();
  }

}
