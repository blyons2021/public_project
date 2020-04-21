import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { MissionComponent } from './mission/mission.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { ProfileComponent } from './profile/profile.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes=[
  {path: 'jobs', component: JobsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    MissionComponent,
    NotificationsComponent,
    ObjectivesComponent,
    ProfileComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
