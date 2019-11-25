import { ActionReducerMap, MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { IUser } from '../models';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: IUser;
  loginErr: string;
}

const initialState: AuthState = {
  user: undefined,
  loginErr: ''
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.startLogin, (state, action) => {
    return {
      user: undefined,
      loginErr: ''
    };
  }),

  on(AuthActions.loginCompleted, (state, action) => {
    return {
      user: action.user,
      loginErr: ''
    };
  }),

  on(AuthActions.loginError, (state, action) => {
    return {
      user: undefined,
      loginErr: action.msg
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
      loading: false,
      loginErr: ''
    };
  })
);

// export const reducers: ActionReducerMap<AuthState> = {};

export const metaReducers: MetaReducer<AuthState>[] = !environment.production
  ? []
  : [];
