import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import { IndexComponent } from './index.component';
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
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [IndexComponent],
})
export class IndexModule { }
