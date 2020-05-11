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
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';

const routes: Routes=[
  {path: 'vision', component: VisionComponent},
  {path: 'objectives', component: ObjectivesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'search', component: SearchComponent}
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
    VisionComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }