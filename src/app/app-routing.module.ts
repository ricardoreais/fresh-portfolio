import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { IntroComponent } from './intro/intro.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'about',
    component: BioComponent,
    data: {animation: 'Bio'}
  },
  {
    path: 'experience',
    component: TimelineComponent,
    data: {animation: 'Timeline'}
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {animation: 'Projects'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {animation: 'Contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
