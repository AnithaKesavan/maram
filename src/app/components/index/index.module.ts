import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import { IndexComponent } from './index.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
declare var jQuery: any;

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [IndexComponent],
})
export class IndexModule { }
