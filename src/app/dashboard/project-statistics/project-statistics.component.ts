import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-project-statistics',
  templateUrl: './project-statistics.component.html',
  styleUrls: ['./project-statistics.component.css']
})
export class ProjectStatisticsComponent implements OnInit {

  @Input()
  finishedTasks: Task[];

  @Input()
  inProgressTasks: Task[];

  @Input()
  stakeHolders: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
