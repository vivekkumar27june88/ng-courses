import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModuleImportModule } from '../material-module-import/material-module-import.module';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesEffects } from './state/courses.effects';
import * as fromCourses from './state/courses.reducer';

@NgModule({
  declarations: [CoursesComponent, CourseDialogComponent],
  imports: [
    MaterialModuleImportModule,
    CommonModule,
    CoursesRoutingModule,
    StoreModule.forFeature(
      fromCourses.COURSES_FEATURE_KEY,
      fromCourses.reducer
    ),
    EffectsModule.forFeature([CoursesEffects]),
    FormsModule
  ],
  exports: [CoursesComponent, CourseDialogComponent],
  entryComponents: [CourseDialogComponent]
})
export class CoursesModule {}
