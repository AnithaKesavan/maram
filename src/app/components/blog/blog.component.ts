import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      400: {
        items: 3
      },
      800: {
        items: 4
      }
    },
    nav: true
  }
  
}
