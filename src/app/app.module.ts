import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GeneralStatisticsComponent } from './dashboard/general-statistics/general-statistics.component';
import { ProjectGanttComponent } from './shared/components/project-gantt/project-gantt.component';
import { ProjectStatisticsComponent } from './dashboard/project-statistics/project-statistics.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserService } from './services/user.service';
import { ProjectDetailsComponent } from './dashboard/project-details/project-details.component';
import { ProjectService } from './services/project.service';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementService } from './services/user-management.service';

const appRoutes: Route[] = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    GeneralStatisticsComponent,
    ProjectGanttComponent,
    ProjectStatisticsComponent,
    ProjectDetailsComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, AuthGuard, UserService, ProjectService, UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
