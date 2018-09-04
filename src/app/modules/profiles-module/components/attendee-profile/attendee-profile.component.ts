import { Component, OnInit } from '@angular/core';
import { AttendeeDataService } from '../../services/attendee-data.service';

@Component({
  selector: 'app-attendee-profile',
  templateUrl: './attendee-profile.component.html',
  styleUrls: ['./attendee-profile.component.css']
})
export class AttendeeProfileComponent implements OnInit {
  Attendee;
  Guardians;
  Notes;
  constructor(public cdata:AttendeeDataService) { }
  getAttendee(){
      this.cdata.getAttendee().subscribe(data=>{
        if(data){
          console.log(data);
          this.Attendee = data['info'];
          this.Guardians = data['info']['guardians'];
          this.Notes = data['info']['notes'];
        } 
      })
  }
  ngOnInit() {
    this.getAttendee();
  }

}
