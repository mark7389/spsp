import { Component, OnInit } from '@angular/core';
import { AttendeeDataService } from '../../services/attendee-data.service';
import { MatBottomSheet } from '@angular/material';
import { AttendeeformComponent } from '../../../forms-module/components/attendeeform/attendeeform.component'
import { GuardianformComponent } from '../../../forms-module/components/guardianform/guardianform.component';
import { NoteformComponent } from '../../../forms-module/components/noteform/noteform.component';
import { ImageuploadComponent } from '../imageupload/imageupload.component';
import { ImageconverterService } from '../../../../shared/imageconverter.service';

@Component({
  selector: 'app-attendee-profile',
  templateUrl: './attendee-profile.component.html',
  styleUrls: ['./attendee-profile.component.css']
})
export class AttendeeProfileComponent implements OnInit {
  Attendee;
  Guardians;
  Notes;
  Address;
  constructor(public converter: ImageconverterService,public cdata:AttendeeDataService, public bottomsheet: MatBottomSheet) { 
    
  }
  getAttendee(){
      this.cdata.getAttendee().subscribe(data=>{
        console.log(data);
        if(data){
          
          this.Attendee = data['info'];
          if(this.Attendee['picture']){
            this.converter.convert(this.Attendee['picture']).then(res=>{
              this.Attendee['picture'] = res;
            })
          }
          if(this.Attendee['address']){
            this.Address = this.Attendee['address'].replace(/['/']/g," ");
          }
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
  uploadImage(){
    this.bottomsheet.open(ImageuploadComponent);
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
    console.log('hi');
    this.getAttendee();
  }

}
