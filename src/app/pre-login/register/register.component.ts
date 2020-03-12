import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatDialogRef } from '@angular/material';
import { UtilHelper } from 'src/app/services/util';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent {

  private userCreateForm: FormGroup;
  public registrationSuccess: boolean = false;
  public userAlreadyExit: boolean = false;
  private createUserResponseData: any;
  passwordHide = true;
  confirmPasswordHide = true;

  constructor(private registerService: RegisterService,
    private utilHelp: UtilHelper,
    public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {

    this.userCreateForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  validateAndCreate() {
    console.log(this.userCreateForm.valid);
    console.log(this.userCreateForm.value.email);
    if (this.userCreateForm.valid) {
      this.registrationSuccess = false;
      let email = this.userCreateForm.value.email;
      let password = this.userCreateForm.value.password;
      this.registerService.createNewUser(this.userCreateForm.value).subscribe((response) => {
        this.createUserResponseData = response;
        this.createUserResponseData = JSON.parse(this.createUserResponseData);

        if (this.createUserResponseData.status === 1) {
          console.log('user Create Success');
          this.registrationSuccess = true;
          this.utilHelp.open('User Created Successfully');
          this.dialogRef.close();
        } else {
          this.userAlreadyExit = true;
          console.log('user Create Failed');
          this.utilHelp.open('User Creation Failed');
        }
      }, error => {
        this.utilHelp.open('No Services');
        console.log('No Services');
      });
    }
  }

  close() {
    this.dialogRef.close();
  }

}
