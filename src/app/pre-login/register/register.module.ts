import { NgModule } from '@angular/core';
// import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule } from '@angular/router';
// import { MaterialModule } from '../shared/material.module';
// import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component'; 

export const ROUTES: Routes = [
  { path: 'register',        component: RegisterComponent } 
];

@NgModule({
  declarations: [
    RegisterComponent 
  ],
  imports: [
        RouterModule.forChild(ROUTES),
        // MaterialModule,
        // SharedModule
    ],
  providers: []
})
export class RegisterModule { }
