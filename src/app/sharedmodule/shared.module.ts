import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router'; 
import { UtilHelper } from '../services/util';
import { LoginService } from '../pre-login/login/login.service';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
		LoginService
	]

})
export class SharedModule { }
