import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { CoursesEntity } from './courses.models';

export const COURSES_FEATURE_KEY = 'courses';

export interface State extends EntityState<CoursesEntity> {
  selectedId?: string | number; // which Courses record has been selected
  loaded: boolean; // has the Courses list been loaded
  error?: string | null; // last none error (if any)
}

export interface CoursesPartialState {
  readonly [COURSES_FEATURE_KEY]: State;
}

export const coursesAdapter: EntityAdapter<CoursesEntity> = createEntityAdapter<
  CoursesEntity
>();

export const initialState: State = coursesAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const coursesReducer = createReducer(
  initialState,

  on(CoursesActions.loadCourses, state => ({
    ...state,
    loaded: false,
    error: null
  })),

  on(CoursesActions.loadCoursesSuccess, (state, { courses }) =>
    coursesAdapter.addAll(courses, { ...state, loaded: true })
  ),

  on(CoursesActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return coursesReducer(state, action);
}
