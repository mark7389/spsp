import { Component, OnInit } from '@angular/core';
import { AttendeeDataService } from '../../services/attendee-data.service';
import { MatBottomSheet } from '@angular/material';
import { AttendeeformComponent } from '../../../forms-module/components/attendeeform/attendeeform.component'
import { GuardianformComponent } from '../../../forms-module/components/guardianform/guardianform.component';
import { NoteformComponent } from '../../../forms-module/components/noteform/noteform.component';
@Component({
  selector: 'app-attendee-profile',
  templateUrl: './attendee-profile.component.html',
  styleUrls: ['./attendee-profile.component.css']
})
export class AttendeeProfileComponent implements OnInit {
  Attendee;
  Guardians;
  Notes;
  constructor(public cdata:AttendeeDataService, public bottomsheet: MatBottomSheet) { }
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
  getSheetRef(){
    this.bottomsheet._openedBottomSheetRef.afterDismissed().subscribe(ref=>{
        this.getAttendee();
    })
  }
  editAttendee(){
    this.bottomsheet.open(AttendeeformComponent,{data:this.Attendee})
    this.getSheetRef();
  }
  addGuardian(){
    this.bottomsheet.open(GuardianformComponent);
    this.getSheetRef();

  }
  editGuardian(i){
    
    this.bottomsheet.open(GuardianformComponent,{data:this.Guardians[i]});
    this.getSheetRef();

  }
  addNote(){
    this.bottomsheet.open(NoteformComponent);
    this.getSheetRef();

  }
  ngOnInit() {
    this.getAttendee();
  }

}
