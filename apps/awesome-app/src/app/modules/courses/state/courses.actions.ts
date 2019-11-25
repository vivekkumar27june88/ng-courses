import { createAction, props } from '@ngrx/store';
import { CoursesEntity } from './courses.models';

export const loadCourses = createAction('[Courses] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: CoursesEntity[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);

export const createCourse = createAction(
  '[Courses] Create Course',
  props<{ course: CoursesEntity }>()
);

export const createCourseSuccess = createAction(
  '[Courses] Create Course Success',
  props<{ course: CoursesEntity }>()
);

export const createCourseFailure = createAction(
  '[Courses] Create Course Failure',
  props<{ createError: any }>()
);
