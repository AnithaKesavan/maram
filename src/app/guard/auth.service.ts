import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  rememberme: boolean;

  public loggedinuser: boolean;
  public currentuser: string;
   

  constructor(private http: HttpClient, private router: Router) {
    
  }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login() {
   this.loggedinuser = true;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/userlogin']);
  }
}