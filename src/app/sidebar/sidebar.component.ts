import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  user: User;
  subscription: Subscription;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();

    this.subscription = this.authService.loginNotification
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}
