import { Component, OnInit } from '@angular/core';
import { AttendeeDataService } from '../../services/attendee-data.service';

@Component({
  selector: 'app-attendee-profile',
  templateUrl: './attendee-profile.component.html',
  styleUrls: ['./attendee-profile.component.css']
})
export class AttendeeProfileComponent implements OnInit {
  Attendee;
  Guardian;
  Notes;
  constructor(public cdata:AttendeeDataService) { }
  getAttendee(){
      this.cdata.getAttendee().subscribe(data=>{
        if(data){
          console.log(data);
          this.Attendee = data['info'][0];
          this.Guardian = data['guardian'][0];
          this.Notes = data['notes'];
        } 
      })
  }
  ngOnInit() {
    this.getAttendee();
  }

}
