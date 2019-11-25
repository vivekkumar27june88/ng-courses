import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CourseService } from '../services/course.service';
import * as CoursesActions from './courses.actions';
import { CoursesEntity } from './courses.models';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      concatMap(action => this.courseService.getAllCourse()),
      map(courses =>
        CoursesActions.loadCoursesSuccess({
          courses: courses as CoursesEntity[]
        })
      ),
      catchError(error => of(CoursesActions.loadCoursesFailure({ error })))
    );
  });

  createCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      concatMap(action => this.courseService.createNewCourse(action.course)),
      map(course =>
        CoursesActions.createCourseSuccess({
          course: course['newCourse'] as CoursesEntity
        })
      ),
      catchError(createError =>
        of(CoursesActions.createCourseFailure({ createError }))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
