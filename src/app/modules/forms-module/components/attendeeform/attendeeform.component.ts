import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgModel, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatBottomSheetRef,MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-attendeeform',
  templateUrl: './attendeeform.component.html',
  styleUrls: ['./attendeeform.component.css']
})

export class AttendeeformComponent implements OnInit {
  Attendee;
  reader = new FileReader();
  constructor(public router:Router, public sheetRef:MatBottomSheetRef)
   {
    this.Attendee = {
      first_name:"",
      last_name:"",
      date_of_birth:"",
      picture:"",
      address:""
    }
   }
  handleDateChange($event: MatDatepickerInputEvent<Date>){
    console.log($event);
    this.Attendee['date_of_birth'] = $event.value.toISOString().split('T')[0];
  }
  handleInputChange($name,$value){
    
      this.Attendee[$name] = $value;
  }
  handlePictureUpload($event){
    console.log($event);
    let file = $event.target.files[0];
    this.Attendee.picture = file;

  }
  addAttendee(){
     console.log(this.Attendee);
      // this.sheetRef.dismiss();
  }
  ngOnInit() {
      
  }

}
