import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../../reducers';
import * as CourseActions from '../../state/courses.actions';
import { CoursesEntity } from '../../state/courses.models';
import { getCreated, getCreateError } from '../../state/courses.selectors';

@Component({
  selector: 'ng-courses-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;
  public courseCreated = false;
  public courseError: any = null;

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.store.select(getCreated).subscribe(created => {
        this.courseCreated = created;
        if (this.courseCreated === true) {
          this.dialogRef.close({ status: 'success' });
        }
      })
    );

    this.subscriptions.add(
      this.store
        .select(getCreateError)
        .subscribe(courseError => (this.courseError = courseError))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  closeDialog() {
    this.dialogRef.close({ status: 'cancel' });
  }

  submitCourse(courseForm: NgForm) {
    const course: CoursesEntity = {
      id: null,
      name: courseForm.value.name,
      trainer: courseForm.value.name,
      duration: courseForm.value.duration,
      level: courseForm.value.level,
      rating: courseForm.value.rating,
      courseImg: courseForm.value.courseImg
    } as CoursesEntity;
    this.store.dispatch(CourseActions.createCourse({ course }));
  }
}
