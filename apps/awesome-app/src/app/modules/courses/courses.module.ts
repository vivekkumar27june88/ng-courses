import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModuleImportModule } from '../material-module-import/material-module-import.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesEffects } from './state/courses.effects';
import * as fromCourses from './state/courses.reducer';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    MaterialModuleImportModule,
    CommonModule,
    CoursesRoutingModule,
    StoreModule.forFeature(
      fromCourses.COURSES_FEATURE_KEY,
      fromCourses.reducer
    ),
    EffectsModule.forFeature([CoursesEffects])
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {}
