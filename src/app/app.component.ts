import { Component, OnInit} from '@angular/core';
declare var $: any;
import * as Modernizr from 'modernizr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(): void {

  }
}
