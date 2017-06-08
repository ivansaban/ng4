import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  statistics: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.statistics = {};

    this.userService.getUserNumberStatistics()
      .subscribe(stat => this.statistics = stat);
  }


}
