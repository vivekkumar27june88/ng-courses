import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as jwtDecode from 'jwt-decode';
import { AppState } from '../../../reducers';
import { IUser } from '../models';
import * as AuthActions from '../reducers/auth.actions';
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

          const decodedToken = jwtDecode(loginSucRes['accessToken']);
          const user: IUser = {
            email: decodedToken['email'],
            firstName: decodedToken['firstName'],
            lastName: decodedToken['lastName']
          } as IUser;
          this.store.dispatch(AuthActions.login({ user }));

          this.router.navigate(['/movies']);
        },
        loginErrRes => {
          console.log({ loginErrRes });
        }
      );
  }
}
