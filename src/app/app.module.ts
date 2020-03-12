import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRouterModule } from './app.router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pre-login/register/register.component';
import { LoginComponent } from './pre-login/login/login.component'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './sharedmodule/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Utility } from './services/utility';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxSpinnerModule
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    Utility
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
