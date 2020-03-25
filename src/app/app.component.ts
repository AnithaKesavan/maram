import { Component, OnInit, HostListener } from '@angular/core';
import { UtilHelper } from './services/util';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  subscription: Subscription;

  @HostListener('window:beforeunload', ['$event']) goToPage(event) {
    console.log(UtilHelper.loginHide);
    UtilHelper.loginHide = true;
  }

  constructor(private router: Router) { 
    let value = UtilHelper.getLocalStorageItemByKey('username');
    if (value === null) {
      UtilHelper.loginHide = true;
    } else {
      UtilHelper.loginHide = false;
    }
  }

  ngOnInit(): void {

    console.log(UtilHelper.loginHide);
  }

}
