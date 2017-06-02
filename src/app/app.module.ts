import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { GeneralStatisticsComponent } from './dashboard/general-statistics/general-statistics.component';
import { ProjectGanttComponent } from './shared/components/project-gantt/project-gantt.component';
import { ProjectStatisticsComponent } from './dashboard/project-statistics/project-statistics.component';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Route[] = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    GeneralStatisticsComponent,
    ProjectGanttComponent,
    ProjectStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
