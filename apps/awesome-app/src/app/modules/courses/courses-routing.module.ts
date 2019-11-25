import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDataResolverService } from './services/course-data-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: {
      courses: CoursesDataResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
