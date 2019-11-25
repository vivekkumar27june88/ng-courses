import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import * as AuthActions from '../reducers/auth.actions';
import * as AuthSelectors from '../reducers/auth.selectors';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ng-courses-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginErr = '';
  private subscriptions: Subscription = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.store.select(AuthSelectors.loginErr).subscribe(loginErr => {
        this.loginErr = loginErr;
      })
    );

    this.subscriptions.add(
      this.store
        .select(AuthSelectors.userProfile)
        .pipe(skip(1))
        .subscribe(userProfile => {
          console.log({ userProfile });
          this.router.navigate(['/movies']);
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  submitLoginForm(loginForm: NgForm) {
    console.log('submit');
    this.store.dispatch(
      AuthActions.startLogin({
        user: {
          email: loginForm.value.email,
          password: loginForm.value.password
        }
      })
    );

    /* this.authService
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
      ); */
  }
}
