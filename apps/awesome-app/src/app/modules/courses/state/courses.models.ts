/**
 * Interface for the 'Courses' data
 */
export interface CoursesEntity {
  id: string | number; // Primary ID
  name: string;
  trainer: string;
  duration: string;
  level: string[];
  rating: number;
  courseImg: string;
}
