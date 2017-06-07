import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-project-gantt',
  templateUrl: './project-gantt.component.html',
  styleUrls: ['./project-gantt.component.css']
})
export class ProjectGanttComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() {
  }

  ngOnInit() {

  }


}
