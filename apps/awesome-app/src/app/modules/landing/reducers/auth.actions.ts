import { createAction, props } from '@ngrx/store';
import { IUser, ILoginData } from '../models';

export const startLogin = createAction(
  '[Auth] Start Login',
  props<{ user: ILoginData }>()
);

export const loginCompleted = createAction(
  '[Auth] Login Completed',
  props<{ user: IUser }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{ msg: string }>()
);

export const logout = createAction('[Auth] Logout');
