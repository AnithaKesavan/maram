import { Component, OnInit } from '@angular/core';
import { UtilHelper } from 'src/app/services/util';
import { GalleryService } from './gallery.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  slides: any[] = new Array();
  galleryArray: any[] = array;

  constructor(public galleryService: GalleryService,
    public utilHelp: UtilHelper) { }

  ngOnInit() {
    this.getallgallery();
  }

  getallgallery() {
    this.galleryService.get_all_gallery().subscribe((response) => {
      if (response.status === 0) {
        this.utilHelp.open('Error');
        return;
      }
      this.galleryArray = response.message;

      this.slides = response.message;

      this.slides.forEach(element => {
        let imgline = element.gfile_path.indexOf('\assets');
        element.gfile_path = element.gfile_path.slice(imgline - 1, element.bfile_path.length);
      });

    }, (err: HttpErrorResponse) => {
      console.log("No Services");
      this.utilHelp.open('No Services');
    });
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
    "gid": 1,
    "title": "editing_file_image",
    "gfile": "20200223053234am_322944.jpg",
    "gfile_path": "/assets\/blog_uploads\/20200310010534pm_ice-cream.jpg"
  },
  {
    "gid": 8,
    "title": "First Picture",
    "gfile": "20200309061613pm_download.jpg",
    "gfile_path": "/assets\/blog_uploads\/minion.jpg"
  }, {
    "gid": 9,
    "title": "First Picture",
    "gfile": "20200310063153am_download.jpg",
    "gfile_path": "/assets\/blog_uploads\/20200310011213pm_sunflower.jpg"
  },
  {
    "gid": 10,
    "title": "First Picture",
    "gfile": "20200310063449am_download.jpg",
    "gfile_path": "/assets\/blog_uploads\/20200310012617pm_minion.jpg"
  },
  {
    "gid": 11,
    "title": "First Picture",
    "gfile": "20200310125016pm_download.jpg",
    "gfile_path": "/assets\/blog_uploads\/download.jpg"
  },
  {
    "gid": 12,
    "title": "jhkjh",
    "gfile": "20200310125128pm_download.jpg",
    "gfile_path": "/assets\/blog_uploads\/ice-cream.jpg"
  },
  {
    "gid": 13,
    "title": "Testing",
    "gfile": "20200310010534pm_ice-cream.jpg",
    "gfile_path": "/assets\/blog_uploads\/20200310013910pm_minion.jpg"
  },
  {
    "gid": 14,
    "title": "title",
    "gfile": "20200310011213pm_sunflower.jpg",
    "gfile_path": "/assets\/blog_uploads\/20200310011213pm_sunflower.jpg"
  },
  {
    "gid": 15,
    "title": "test",
    "gfile": "20200310013910pm_minion.jpg",
    "gfile_path": "/assets\/blog_uploads\/minion.jpg"
  },
  {
    "gid": 16,
    "title": "testing",
    "gfile": "20200310015723pm_sunflower.jpg",
    "gfile_path": "/assets\/blog_uploads\/sunflower.jpg"
  }]