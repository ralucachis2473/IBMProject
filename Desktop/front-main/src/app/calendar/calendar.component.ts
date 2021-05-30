import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  //calendar: any;

constructor(private dataService: DataService) {}
   ngOnInit() {
        //this.dataService.get().subscribe((data)=>{
          //console.log(data);
          //this.calendar = data['calendar'];
        //});
      }


}
