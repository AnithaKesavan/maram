import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { UtilHelper } from '../services/util';
import { LoginService } from '../pre-login/login/login.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogService } from '../components/blog/blog.service';
import { RegisterService } from '../pre-login/register/register.service';

@NgModule({

	declarations: [

	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,

		// Material

		MatInputModule,
		MatDividerModule,
		MatCardModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatIconModule,
		MatSelectModule,
		MatListModule,
		MatSnackBarModule,
		MatIconModule,

		// Other Modules
		CarouselModule

	],
	exports: [

		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatSelectModule,
		MatDividerModule
	],
	providers: [
		UtilHelper,
		LoginService,
		BlogService,
		RegisterService
	]

})
export class SharedModule { }
