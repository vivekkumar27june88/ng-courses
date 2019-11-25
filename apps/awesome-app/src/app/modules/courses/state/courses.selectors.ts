import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  coursesAdapter,
  CoursesPartialState,
  COURSES_FEATURE_KEY,
  State
} from './courses.reducer';

// Lookup the 'Courses' feature state managed by NgRx
export const getCoursesState = createFeatureSelector<
  CoursesPartialState,
  State
>(COURSES_FEATURE_KEY);

const { selectAll, selectEntities } = coursesAdapter.getSelectors();

export const getCoursesLoaded = createSelector(
  getCoursesState,
  (state: State) => state.loaded
);

export const getCoursesError = createSelector(
  getCoursesState,
  (state: State) => state.error
);

export const getAllCourses = createSelector(
  getCoursesState,
  (state: State) => selectAll(state)
);

export const getCoursesEntities = createSelector(
  getCoursesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCoursesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCoursesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getCreated = createSelector(
  getCoursesState,
  (state: State) => state.created
);

export const getCreateError = createSelector(
  getCoursesState,
  (state: State) => state.createError
);
