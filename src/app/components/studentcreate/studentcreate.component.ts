import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrl: './studentcreate.component.scss'
})
export class StudentcreateComponent {

  student: Student = {
    id: 0,
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(public dialogRef: MatDialogRef<StudentcreateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.student = { ...data };
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveStudent() {
    if (this.student.id !== 0 && this.student.first_name !== '' && this.student.last_name !== ''&& this.student.email !== '' ) {
      this.dialogRef.close(this.student);
    }
  }
}
