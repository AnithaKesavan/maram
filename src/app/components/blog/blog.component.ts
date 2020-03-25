import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogService } from './blog.service';
import { UtilHelper } from 'src/app/services/util';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  slides: any[] = new Array();
  demo: string;
  // slides: any[] = array;
  img: any = '/assets\/blog_uploads\/20200310010534pm_ice-cream.jpg';
  constructor(public DomSanitizer: DomSanitizer, public blogService: BlogService,
    public utilHelp: UtilHelper, public router: Router) { }

  ngOnInit() {
    this.getallblog();
  }

  getallblog() {
    this.blogService.get_all_blog().subscribe((response) => {
      if (response.status === 0) {
        this.utilHelp.open('Error');
        return;
      }
      this.slides = response.message;
 
      this.slides.forEach(element => {
        let imgline = element.bfile_path.indexOf('\assets');
        element.bfile_path = element.bfile_path.slice(imgline - 1, element.bfile_path.length);
      });

    }, (err: HttpErrorResponse) => {
      console.log("No Services");
      this.utilHelp.open('No Services');
    });
  }

  movetoparticularitem(item) {
    this.router.navigateByUrl('blogdetails', { state: { data: item } });
  }

  customOptions: OwlOptions = {
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}

const array: any[] = [
  {
    "bid": 1,
    "title": "editing_file_image",
    "bfile": "20200223053234am_322944.jpg",
    "bfile_path": "\/assets\/blog_uploads\/20200323072606am_ice-cream.jpg"
  },
  {
    "bid": 8,
    "title": "First Picture",
    "bfile": "20200309061613pm_download.jpg",
    "bfile_path": "/assets\/blog_uploads\/20200323072128am_download.jpg"
  }, {
    "bid": 9,
    "title": "First Picture",
    "bfile": "20200310063153am_download.jpg",
    "bfile_path": "/assets\/blog_uploads\/20200310011213pm_sunflower.jpg"
  },
  {
    "bid": 10,
    "title": "First Picture",
    "bfile": "20200310063449am_download.jpg",
    "bfile_path": "/assets\/blog_uploads\/20200310012617pm_minion.jpg"
  },
  {
    "bid": 11,
    "title": "First Picture",
    "bfile": "20200310125016pm_download.jpg",
    "bfile_path": "/assets\/blog_uploads\/download.jpg"
  },
  {
    "bid": 12,
    "title": "jhkjh",
    "bfile": "20200310125128pm_download.jpg",
    "bfile_path": "/assets\/blog_uploads\/ice-cream.jpg"
  },
  {
    "bid": 13,
    "title": "Testing",
    "bfile": "20200310010534pm_ice-cream.jpg",
    "bfile_path": "/assets\/blog_uploads\/20200310013910pm_minion.jpg"
  },
  {
    "bid": 14,
    "title": "title",
    "bfile": "20200310011213pm_sunflower.jpg",
    "bfile_path": "/assets\/blog_uploads\/20200310011213pm_sunflower.jpg"
  },
  {
    "bid": 15,
    "title": "test",
    "bfile": "20200310013910pm_minion.jpg",
    "bfile_path": "/assets\/blog_uploads\/minion.jpg"
  },
  {
    "bid": 16,
    "title": "testing",
    "bfile": "20200310015723pm_sunflower.jpg",
    "bfile_path": "/assets\/blog_uploads\/sunflower.jpg"
  }]
