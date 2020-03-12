import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/sharedmodule/shared.module';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  providers: []
})
export class LoginModule { }
