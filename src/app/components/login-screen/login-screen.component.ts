import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  loginNotFound: boolean = false
  userNotFound: boolean = false

 

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })
  
  constructor(public databaseservice : DataBaseService){
  this.loginForm.get('email')?.setValue('odair@teste.com')
  this.loginForm.get('password')?.setValue('senha123')
  }

login() {
  const users = this.databaseservice.users;
  // this.databaseservice.userLogged = []

  if (!this.loginForm.get('email')?.value || !this.loginForm.get('password')?.value) {
    this.loginNotFound = true;
    return;
  } else {
    this.loginNotFound = false;
  }

  const verifyEmail = users.find(user => {
    return user.email === this.loginForm.get('email')?.value
  });

  if (verifyEmail && verifyEmail.password === this.loginForm.get('password')?.value) {
    this.databaseservice.userLogged = verifyEmail
    console.log(verifyEmail)

    this.databaseservice.currentPage = 'MAIN'
  } else {
    this.userNotFound = true;
  }
}

  goToSignup():void{
  this.databaseservice.currentPage = 'SIGNUP'
}
}


