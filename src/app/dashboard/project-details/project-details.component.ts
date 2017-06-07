import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserProject } from '../../models/user-project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  userProjects: UserProject[];
  selectedProject: UserProject;

  constructor(private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userService.getProjectForUser(this.authService.currentUser.id)
      .subscribe(userProjects => this.userProjects = userProjects);
  }

  onProjectChange(event: Event) {
    console.log(event);
  }
}
