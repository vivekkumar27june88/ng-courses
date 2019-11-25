import { createSelector, createFeatureSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './index';

export const authStateSelector = createFeatureSelector<AuthState>(
  authFeatureKey
);

export const isLoggedIn = createSelector(
  authStateSelector,
  auth => !!auth.user
);

export const loginErr = createSelector(
  authStateSelector,
  auth => auth.loginErr
);

export const userProfile = createSelector(
  authStateSelector,
  auth => auth.user
);
