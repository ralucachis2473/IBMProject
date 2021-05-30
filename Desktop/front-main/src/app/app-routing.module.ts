import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import { AsStudentComponent } from './as-student/as-student.component';
import { AsTeacherComponent } from './as-teacher/as-teacher.component';
import { AsGuestComponent } from './as-guest/as-guest.component';
import { AsAdminComponent } from './as-admin/as-admin.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { EditComponent } from './edit/edit.component';
import { AddStudentComponent } from './add-student/add-student.component';



const routes: Routes = [
  
  {
    path: 'as-student', component: AsStudentComponent
  },
  {
    path:'as-teacher', component: AsTeacherComponent
  },
  {
    path: 'as-guest', component: AsGuestComponent
  },
    {
    path: 'as-admin', component: AsAdminComponent
  },
     {
    path: 'new-course', component: NewCourseComponent
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AsStudentComponent,AsGuestComponent,AsTeacherComponent, AsAdminComponent,
 NewCourseComponent, EditComponent, AddStudentComponent]