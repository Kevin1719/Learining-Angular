import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/components/landing-page.component";

import {SpinnerComponent} from "./ui/spinner/spinner.component";

const routes: Routes = [
  {path:'facesnaps',loadChildren:() => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
  { path: '', component: LandingPageComponent },
  {path: 'spinner', component: SpinnerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export  class AppRoutingModule{}
