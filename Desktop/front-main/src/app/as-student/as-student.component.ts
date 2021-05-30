import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Class } from '../class';
import { TeacherService } from '../as-teacher/as-teacher.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../as-student/as-student.service';
import { Enrollment } from '../as-student/enrollment';
import { Users } from '../as-student/users';

import {
  //Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-as-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
     template: `<h4>Student's courses</h4>
<ul *ngFor="let group of enrolledin">
  <li>{{ group.student }}</li>
  <ul>
    <li *ngFor="let person of group.enrolledin">
      {{ course.name }}
    </li>
  </ul>
</ul>
 `,
   templateUrl: './as-student.component.html',
  styleUrls: ['./as-student.component.scss']

})
export class AsStudentComponent implements OnInit {
	
	public classes: Class[];
	public enrollments: Enrollment[];
	public enrolled: Enrollment[];
	public students: Users[];
	public editUser: Users;
	
	
	constructor(private teacherService: TeacherService, private studentService: StudentService){ }
	
	ngOnInit() {
		this.getClasses();
		this.getEnrollments();
		this.getStudents();
	}
	
	
	
	public getClasses(): void {
		this.teacherService.getClasses().subscribe(
			(response: Class[]) => {
				this.classes = response;
				
				console.log(response);
			},
			(error: HttpErrorResponse) => {

				alert(error.message);
			}
		);
	}
	
	public getEnrollments(): void {
		
		this.studentService.getEnrollments().subscribe(
			(response: Enrollment[]) => {
				this.enrollments = response;
				
				console.log(response);
			},
			(error: HttpErrorResponse) => {

				alert(error.message);
			}
		);
	}
	
	public getStudents(): void {
		
		this.studentService.getStudents().subscribe(
			(response: Users[]) => {
				this.students = response;
				
				console.log(response);
			},
			(error: HttpErrorResponse) => {

				alert(error.message);
			}
		);
	}
	
 	//public pushClassesList(): void {
		//this.enrollments.push({'id':2, 'classId': 2});
		//console.log(this.enrollments);
	//} 
	
	public onUpdateUser(updatedUser: Users): void {
		this.editUser = updatedUser;
		this.studentService.updateUser(updatedUser).subscribe(
		(response: Users) => {
			console.log(response);
		}, 
		(error: HttpErrorResponse) => {
			alert(error.message);
		}
		); 
	}
	
	public onAddEnroll(enroll: Enrollment): void {
		this.studentService.addEnrollment(enroll).subscribe(
		(response: Enrollment) => {
			console.log(response);
		}, 
		(error: HttpErrorResponse) => {
			alert(error.message);
		}
		); 
	}
	

	


/*

  peopleByCountry: any[] = [
    {
      'country': 'enrolled',
      'enrolledin': [
        {
          "name": "Algotithms"
        },
        {
          "name": "Programming"
        },
      ]
    },
    {
      'country': 'not enrolled',
      'enrolledin': [
        {
          "name": "x"
        },
        {
          "name": "y"
        },
        {
          "name": "z"
        }
      ]
    }
  ];

ngOnInit(): void {};
  
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Algorithms',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'Data Structures',
      color: colors.yellow,
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Programming',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }
  

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  */
}


