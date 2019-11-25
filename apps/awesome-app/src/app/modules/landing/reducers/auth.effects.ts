import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, catchError, concatMap, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as jwtDecode from 'jwt-decode';
import { IUser } from '../models';
import { EMPTY } from 'rxjs';

@Injectable()
export class AuthEffects {
  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.startLogin),
      concatMap(action =>
        this.authService
          .login({
            email: action.user.email,
            password: action.user.password
          })
          .pipe(
            map(loginSucRes => {
              const decodedToken = jwtDecode(loginSucRes['accessToken']);
              const user: IUser = {
                email: decodedToken['email'],
                firstName: decodedToken['firstName'],
                lastName: decodedToken['lastName']
              } as IUser;
              return AuthActions.loginCompleted({ user });
            }),
            catchError(error => {
              /* const msg = 'Error while login';
              return AuthActions.loginError({ msg }); */
              return EMPTY;
            })
          )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
