import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/sharedmodule/shared.module';
import { BlogdetailsComponent } from './blogdetails.component';

const routes: Routes = [
  {
    path: '',
    component: BlogdetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    BlogdetailsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    
  ]
})
export class BlogdetailsModule { }
