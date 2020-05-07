import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BlogdetailsService } from './blogdetails.service';
import { UtilHelper } from 'src/app/services/util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  blogData: any;

  particularblogdata: any;

  constructor(public _router: Router, public blogService: BlogdetailsService, public utilHelp: UtilHelper) {


    if (this._router.getCurrentNavigation() === null) {
      this.blogData = {
        'bfile_path': 'assets/images/noimage.jpg',
        'title': 'No Data Found'
      }

    } else {
      if (this._router.getCurrentNavigation().extras.replaceUrl === true) {
        this.blogData = {
          'bfile_path': 'assets/images/noimage.jpg',
          'title': 'No Data Found'
        }
      } else {
        this.blogData = this._router.getCurrentNavigation().extras.state.data;
        console.log(this.blogData);
        this.getallblog();
      }
    }

  }

  ngOnInit(): void {
    document.getElementById("overlay").style.backgroundImage = 'assets/images/noimage.jpg'
  }


  getallblog() {
    this.blogService.get_particular_blog(this.blogData.bid).subscribe((response) => {
      if (response.status === 0) {
        this.utilHelp.open('Error');
        return;
      }
      let data = response.message;
      let imgline = data.bfile_path.indexOf('\assets');
      imgline = data.bfile_path.slice(imgline - 1, data.bfile_path.length);

      this.particularblogdata = {
        'img': imgline,
        'title': data.title
      }

    }, (err: HttpErrorResponse) => {
      console.log("No Services");
      this.utilHelp.open('No Services');
    });
  }



  zoomOut() {
    let element = document.getElementById("overlay");
    element.style.display = "none";
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event) {
  //   console.log(event);
  //   let element = document.getElementById("overlay");
  //   element.style.display = "inline-block";
  //   let img = document.getElementById("imgZoom");
  //   element.style.backgroundImage = this.blogData.bfile_path;
  //   let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  //   let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  //   element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 4) + "px";
  // }

  // zoomIn(event) {
  //   let element = document.getElementById("overlay");
  //   element.style.display = "inline-block";
  //   let img = document.getElementById("imgZoom");
  //   element.style.backgroundImage = this.blogData.bfile_path;
  //   let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
  //   let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
  //   element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 4) + "px";

  // }


}
