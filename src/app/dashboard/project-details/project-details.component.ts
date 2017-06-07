import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserProject } from '../../models/user-project.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  userProjects: UserProject[];
  selectedProject: UserProject;
  tasks: Task[];

  constructor(private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userService.getProjectForUser(this.authService.currentUser.id)
      .subscribe(userProjects => this.userProjects = userProjects);
  }

  onProjectChange(userProject: any) {
    if (userProject.id != null) {
      this.userService.getTasksForProject(this.authService.currentUser.id, userProject.id)
        .subscribe(projectTasks => this.tasks = projectTasks );
    }
    else{
      this.tasks = [];
    }
  }
}
