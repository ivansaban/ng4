import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserProject } from '../../models/user-project.model';
import { Task } from '../../models/task.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  userProjectsForDropDown: UserProject[];
  selectedProject: UserProject;
  tasks: Task[];

  finishedTasks: Task[];
  inProgressTasks: Task[];

  constructor(private userService: UserService, private authService: AuthenticationService, private  projectService: ProjectService) {
  }

  ngOnInit() {
    this.userService.getProjectForUser(this.authService.currentUser.id)
      .subscribe(userProjects => this.userProjectsForDropDown = userProjects);
  }

  onProjectChange(userProject: any) {
    if (userProject.id != null) {
      this.userService.getTasksForProject(this.authService.currentUser.id, userProject.id)
        .subscribe(projectTasks => this.tasks = projectTasks);

      this.projectService.getTasksForProjectWithStatus(userProject.id, 'Finished')
        .subscribe(finishedTasks => this.finishedTasks = finishedTasks);

      this.projectService.getTasksForProjectWithStatus(userProject.id, 'In progress')
        .subscribe(inProgressTasks => this.inProgressTasks = inProgressTasks);
    }
    else {
      this.tasks = [];
      this.finishedTasks = [];
      this.inProgressTasks = [];
    }
  }
}
