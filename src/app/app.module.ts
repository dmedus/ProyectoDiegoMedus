import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CourseComponent } from './pages/course/course.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentcreateComponent } from './pages/studentcreate/studentcreate.component';
import { CoursetcreateComponent } from './pages/coursetcreate/coursetcreate.component';
import { TituloDirective } from './common/directives/titulo.directive';
import { CabecerasDirective } from './common/directives/cabeceras.directive';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    CourseComponent,
    StudentComponent,
    StudentcreateComponent,
    CoursetcreateComponent,
    TituloDirective,
    CabecerasDirective,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
