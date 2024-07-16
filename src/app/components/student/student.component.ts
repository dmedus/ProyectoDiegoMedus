import { Component } from '@angular/core';
import { Student } from '../../interfaces/student';
import { MatDialog } from '@angular/material/dialog';
import { StudentcreateComponent } from '../studentcreate/studentcreate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { find } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  studentsData = [
    { id: 34123789, first_name: 'Juan ',last_name: 'Perez', email: 'juanperez@gmail.com'},
    { id: 34123790, first_name: 'Maria ',last_name: 'Lopez', email: 'marialopez@gmail.com'},
    { id: 34123791, first_name: 'Carlos ',last_name: 'Ramirez', email: 'carlosram@gmail.com'},
    { id: 34123792, first_name: 'Laura ',last_name: 'Martinez', email: 'lauramartinez@gmail.com'}
  ];

  students: Student[] = [];

  constructor(public dialog: MatDialog) {
    this.students = this.studentsData.map(student => ({
      id: student.id,
      first_name: student.first_name,
      last_name: student.last_name,
      email: student.email
    }));
  }
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'actions'];

  addStudent(student: Student) {
    this.students.push(student);
    this.students = [...this.students];
  }

  editStudent(student: any) {
    const dialogRef = this.dialog.open(StudentcreateComponent, {
      width: '800px',
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const findStudent = this.students.find(x => x.id == result.id);
        if (findStudent) {
          findStudent.last_name = result.last_name;
          findStudent.first_name = result.first_name;
          findStudent.email = result.email;
        }
        this.students = [...this.students];
      }
    });
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }

  openStudentDialog() {
    const dialogRef = this.dialog.open(StudentcreateComponent, {
      width: '800px',
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newStudent: Student = {
          id: Number(result.id),
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email
         }
         this.addStudent(newStudent);
      }
    });
  }
}
