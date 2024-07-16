import { Component } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CoursetcreateComponent } from '../coursetcreate/coursetcreate.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  coursesData = [
    { id: 1, name: 'Matematicas', instructor: 'Prof. Sanchez', credits: 3 },
    { id: 2, name: 'Ingles', instructor: 'Prof. Riquelme', credits: 4 },
    { id: 3, name: 'Historia', instructor: 'Dr. Advincula', credits: 3 },
    { id: 4, name: 'Computacion', instructor: 'Prof. Abondanzzieri', credits: 4 },
    { id: 5, name: 'Literatura', instructor: 'Prof. Schiavi', credits: 4 },
    { id: 6, name: 'Geografia', instructor: 'Prof. Palermo', credits: 4 },

  ];

  courses: Course[] = [];


  displayedColumns: string[] = ['id', 'name', 'instructor', 'actions' ];

  constructor(public dialog: MatDialog) {
    this.courses = this.coursesData.map(course => ({
      id: course.id,
      name: course.name,
      instructor: course.instructor,
      credits: course.credits
    }));
  }

  addCourse(course: Course) {
    course.id = this.courses.length + 1;
    this.courses.push(course);
    this.courses = [...this.courses]
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  editCourse(course: any) {
    const dialogRef = this.dialog.open(CoursetcreateComponent, {
      width: '800px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const findCourse = this.courses.find(x => x.id == result.id);
        if (findCourse) {
          findCourse.name = result.name;
          findCourse.instructor = result.instructor;
        }
        this.courses = [...this.courses];
      }
    });
  }

  openCourseDialog() {
    const dialogRef = this.dialog.open(CoursetcreateComponent, {
      width: '800px'
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCourse: Course = {
          id: 1,
          name: result.name,
          instructor: result.instructor,
          credits: result.credits
         }
         this.addCourse(newCourse);
      }
    });
  }

}
