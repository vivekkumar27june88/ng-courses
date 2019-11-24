import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ng-courses-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

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
          this.router.navigate(['/movies']);
        },
        loginErrRes => {
          console.log({ loginErrRes });
        }
      );
  }
}
