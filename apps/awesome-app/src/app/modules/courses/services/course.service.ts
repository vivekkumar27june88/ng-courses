import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CoursesEntity } from '../state/courses.models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getAllCourse() {
    return this.httpClient.get(`${environment.apiBaseUrl}/course`);
  }

  getCourseById(courseId: string) {
    return this.httpClient.get(`${environment.apiBaseUrl}/course/${courseId}`);
  }

  createNewCourse(course: CoursesEntity) {
    return this.httpClient.post(`${environment.apiBaseUrl}/course`, {
      body: course
    });
  }

  updateCourse(courseId: string, body: CoursesEntity) {
    return this.httpClient.put(`${environment.apiBaseUrl}/course/${courseId}`, {
      body
    });
  }

  deleteCourse(courseId) {
    return this.httpClient.delete(
      `${environment.apiBaseUrl}/course/${courseId}`
    );
  }
}
