import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { IntroComponent } from './intro/intro.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'about',
    component: BioComponent
  },
  {
    path: 'experience',
    component: TimelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
