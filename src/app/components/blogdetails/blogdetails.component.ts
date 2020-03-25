import { Component, OnInit } from '@angular/core';
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
    
    this.particularblogdata = {
      'img': 'assets/images/noimage.jpg',
      'title': 'No Data Found'
    } 
    if (this._router.getCurrentNavigation() === null) {

    } else {
      if (this._router.getCurrentNavigation().extras.replaceUrl === true) {

      } else {
        this.blogData = this._router.getCurrentNavigation().extras.state.data;
        console.log(this.blogData);
        this.getallblog();
      }
    }

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

  ngOnInit(): void {
  }

}
