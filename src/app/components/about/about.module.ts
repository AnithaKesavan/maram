import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import { AboutComponent } from './about.component';
declare var jQuery: any;

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [AboutComponent],
})
export class AboutModule { }
