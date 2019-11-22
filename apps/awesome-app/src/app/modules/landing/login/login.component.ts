import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-courses-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  submitLoginForm(loginForm: NgForm) {
    this.authService
      .login({
        email: loginForm.value.email,
        password: loginForm.value.password
      })
      .subscribe(
        loginSucRes => {
          window.sessionStorage.setItem(
            'accessToken',
            loginSucRes['accessToken']
          );
        },
        loginErrRes => {
          console.log({ loginErrRes });
        }
      );
  }
}
