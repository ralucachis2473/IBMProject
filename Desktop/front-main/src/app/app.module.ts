import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from "@angular/common/http";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AsAdminComponent } from './as-admin/as-admin.component';
import { TeacherService } from './as-teacher/as-teacher.service';
import { NewCourseComponent } from './new-course/new-course.component';
import { AsStudentComponent } from './as-student/as-student.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './as-student/as-student.service';

//import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    routingComponents,
    AsAdminComponent,
	NewCourseComponent,
    EditComponent,
	AsStudentComponent,
	AsAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModalModule,
    BrowserModule,
    FlatpickrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [TeacherService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
