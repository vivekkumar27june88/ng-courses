import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../reducers';
import { CoursesEntity } from '../../state/courses.models';
import * as CourseSelectors from '../../state/courses.selectors';

@Component({
  selector: 'ng-courses-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  coursesEntities$: Observable<CoursesEntity[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.coursesEntities$ = this.store.select(CourseSelectors.getAllCourses);
  }
}
