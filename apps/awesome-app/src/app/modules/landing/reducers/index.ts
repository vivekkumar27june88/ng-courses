import { ActionReducerMap, MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { IUser } from '../models';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: IUser;
}

const initialState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    };
  })
);

// export const reducers: ActionReducerMap<AuthState> = {};

export const metaReducers: MetaReducer<AuthState>[] = !environment.production
  ? []
  : [];
