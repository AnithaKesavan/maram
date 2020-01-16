import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import { ContactComponent } from './contact.component';
declare var jQuery: any;

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [ContactComponent],
})
export class ContactModule { }
