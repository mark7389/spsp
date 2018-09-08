import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendeeform',
  templateUrl: './attendeeform.component.html',
  styleUrls: ['./attendeeform.component.css']
})

export class AttendeeformComponent implements OnInit {
  Attendee: FormGroup;
  
  reader = new FileReader();
  constructor(public snackBar: MatSnackBar,public router: Router,public sheetRef: MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,public fb:FormBuilder, private formService:FormdatasubmitService)
   {
     
     if(this.data){
        this.Attendee = this.fb.group({
        id: new FormControl(data.id),
        first_name:new FormControl(data.first_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name:new FormControl(data.last_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        picture:new FormControl(data.picture),
        address:new FormControl(data.address,[Validators.required]),
        date_of_birth:new FormControl(data.date_of_birth ,[Validators.required]),
        gender:new FormControl(data.gender,Validators.required),
        home_phone:new FormControl(data.home_phone === "None" || data.home_phone === "none" || data.home_phone === null ? '0000000000':data.home_phone
          ,[Validators.required, Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        cell_phone:new FormControl(data.cell_phone === "None" || data.cell_phone === "none" || data.cell_phone === null ? '0000000000':data.cell_phone,[Validators.required,Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl(data.email === "None" || data.email === "none" || data.email === null ? '':data.email,[Validators.required, Validators.email]),
        allergies:new FormControl(data.allergies,[Validators.pattern(/^[a-zA-Z]+$/)]),
        
        })
     }else{
      this.Attendee = this.fb.group({
        first_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        picture:new FormControl(''),
        address:new FormControl('',[Validators.required]),
        date_of_birth:new FormControl('',[Validators.required]),
        gender:new FormControl('',Validators.required),
        home_phone:new FormControl('0000000000',[Validators.required, Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        cell_phone:new FormControl('0000000000',[Validators.required,Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl('',[Validators.required, Validators.email]),
        allergies:new FormControl('',[Validators.pattern(/^[a-zA-Z]+$/)]),
        class_id: new FormControl(this.router.url.split('/')[2])
      })
     }
    
  }
  getErrorMessage(c:FormControl){
    
     return this.formService.getError(c);
  }
  dateFormatter(){
    if(this.Attendee.get('date_of_birth').value.indexOf("T") > -1){
       let date = new Date(this.Attendee.get('date_of_birth').value).toISOString().split("T")[0];
       this.Attendee.get('date_of_birth').setValue(date);

    }
  }
  handlePictureUpload($event){
    if($event.target.files[0].type.indexOf("image") > -1){
        this.Attendee.value.picture = $event.target.files[0];
    }
    
  }
  addAttendee(){
    console.log(this.Attendee.value);
     this.dateFormatter();
     this.formService.submitAttendee(this.Attendee.value).subscribe(data=>{
       if(data['inserted']){
        this.snackBar.open("success ✔","",{duration:2000,verticalPosition:'top'})
        this.sheetRef.dismiss();
       }

     },
     err=>{
      this.snackBar.open('failed ✕','',{duration:2000,verticalPosition:'top'});
     })
      
  }
  formDismiss(){
    this.sheetRef.dismiss();
  }
  ngOnInit() {
      
  }

}
