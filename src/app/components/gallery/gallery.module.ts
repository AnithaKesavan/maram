import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router'; 
import { SharedModule } from 'src/app/sharedmodule/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
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
    GalleryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    
  ]
})
export class GalleryModule { }
