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
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        console.log(event);
      }
    });
  }

  ngOnInit(): void {

    console.log(UtilHelper.loginHide);
  }

}
