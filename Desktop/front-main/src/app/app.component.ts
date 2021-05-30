//import { Component } from '@angular/core';
import { Injectable } from '@angular/core';  
import { Component, OnInit } from '@angular/core';
import { Class } from './as-teacher/class';
import { TeacherService } from './as-teacher/as-teacher.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
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
    primary: '#6a040f',
    secondary: '#9d0208',
  },
  blue: {
    primary: '#219ebc',
    secondary: '#023047',
  },
  yellow: {
    primary: '#f48c06',
    secondary: '#ffb703',
  },
};
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'hellos';
  
  public classes: Class[];
	
	constructor(private teacherService: TeacherService, private modal: NgbModal){ }
	
	ngOnInit() {
		this.getClasses();
	}
	
	public getClasses(): void {
		this.teacherService.getClasses().subscribe(
			(response: Class[]) => {
				this.classes = response;
			},
			(error: HttpErrorResponse) => {
				alert(error.message);
			}
		);
	}
  
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
      start: startOfDay(new Date()),
      title: 'Open Schedule',
      color: colors.yellow,
      actions: this.actions,
	}
  ];

  activeDayIsOpen: boolean = true;

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

 goToCalendar(cal: string){
   window.open(cal);
 }
  
}
