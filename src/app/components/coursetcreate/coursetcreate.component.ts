import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-coursetcreate',
  templateUrl: './coursetcreate.component.html',
  styleUrl: './coursetcreate.component.scss'
})
export class CoursetcreateComponent {

  course: Course = {
    id: 0,
    name: '',
    instructor: '',
    credits: 0
  }

  constructor(public dialogRef: MatDialogRef<CoursetcreateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.course = { ...data };
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveCourse() {
    if (this.course.name !== '' && this.course.instructor !== '') {
      this.dialogRef.close(this.course);
    }
  }

}
