import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthServiceService } from 'src/app/guard/auth.service';
import { UtilHelper } from 'src/app/services/util';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  //Declaration
  public LoginForm: FormGroup;
  private LoginUserResponseData: any;
  public loginFailed: boolean = false;
  hide: boolean = true;

  constructor(
    private router: Router,
    private loginService: LoginService,
    public spinner: NgxSpinnerService,
    private utilHelp: UtilHelper,
    public snackBar: MatSnackBar,
    public authService: AuthServiceService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog) {
    this.spinner.hide();
  }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public validateAndLogin() {
    let userName: any;
    userName = this.LoginForm.value.email;

    if (this.LoginForm.valid) {
      this.spinner.show();
      this.loginService.userLogin(this.LoginForm.value).subscribe((response) => {
        this.LoginUserResponseData = response;
        if (this.LoginUserResponseData.status === 1) {
          console.log("user Login Success");
          UtilHelper.loginHide = true;
          UtilHelper.setLocalStorageItemByKey('username', userName);
          UtilHelper.setLocalStorageItemByKey('jwt', this.LoginUserResponseData.jwt);
          this.utilHelp.open('Login Successfully');
          this.authService.login();

          window.location.reload();
          this.spinner.hide();
          this.router.navigateByUrl('/about');
          this.dialogRef.close();
        } else {
          this.loginFailed = true;
          console.log("user Login Fail");
          this.utilHelp.open('User Login Failed');
          this.spinner.hide();
        }
      }, (err: HttpErrorResponse) => {
        console.log("No Services");
        this.utilHelp.open('No Services');
        this.spinner.hide();
      });
    }

  }

  close() {
    this.dialogRef.close();
  }

  createaccount() {
    this.dialogRef.close();

    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '600px',
      disableClose: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {

    });

  }
}
