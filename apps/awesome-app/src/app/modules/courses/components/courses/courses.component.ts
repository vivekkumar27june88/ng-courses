import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../reducers';
import { CoursesEntity } from '../../state/courses.models';
import * as CourseSelectors from '../../state/courses.selectors';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'ng-courses-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  coursesEntities$: Observable<CoursesEntity[]>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.coursesEntities$ = this.store.select(CourseSelectors.getAllCourses);
  }

  createCourseBtnClickHandler() {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '650px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
