import { Component, OnInit, Inject, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-attendeeform',
  templateUrl: './attendeeform.component.html',
  styleUrls: ['./attendeeform.component.css']
})

export class AttendeeformComponent implements OnInit {
  Attendee: FormGroup;
  @Output()
  openGuardian:EventEmitter<Object> =  new EventEmitter<Object>();
  constructor(public cd:ChangeDetectorRef,public snackBar: MatSnackBar,public router: Router,public sheetRef: MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,public fb:FormBuilder, private formService:FormdatasubmitService)
   {
     
     if(this.data){
        this.Attendee = this.fb.group({
        id: new FormControl(data.id),
        first_name:new FormControl(data.first_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name:new FormControl(data.last_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        street_number:new FormControl(this.formService.getStreetNumber(data.address),[Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]),
        street_name:new FormControl(this.formService.getStreetName(data.address),[Validators.required]),
        unit_number: new FormControl(this.formService.getUnit(data.address),Validators.pattern(/^[A-Z0-9]+$/)),
        city: new FormControl(this.formService.getCity(data.address),[Validators.required]),
        province: new FormControl(this.formService.getProvince(data.address),[Validators.required]),
        zip_code:new FormControl(this.formService.getZipCode(data.address),[Validators.required,Validators.pattern(/^[A-Z0-9]+$/),Validators.maxLength(6)]),
        date_of_birth:new FormControl(data.date_of_birth ,[Validators.required]),
        gender:new FormControl(data.gender,Validators.required),
        home_phone:new FormControl(data.home_phone === "None" || data.home_phone === "none" || data.home_phone === null ? '':data.home_phone
          ,[Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        cell_phone:new FormControl(data.cell_phone === "None" || data.cell_phone === "none" || data.cell_phone === null ? '':data.cell_phone,[Validators.required,Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl(data.email === "None" || data.email === "none" || data.email === null ? '':data.email,[Validators.email]),
        allergies:new FormControl(data.allergies,[Validators.pattern(/^[a-zA-Z]+$/)]),
        
        })
     }else{
      this.Attendee = this.fb.group({
        first_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        street_number:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]),
        street_name:new FormControl('',[Validators.required]),
        unit_number: new FormControl('',Validators.pattern(/^[A-Z0-9]+$/)),
        city: new FormControl('',[Validators.required]),
        province: new FormControl('',[Validators.required]),
        zip_code:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z0-9]+$/),Validators.maxLength(6)]),
        date_of_birth:new FormControl('',[Validators.required]),
        gender:new FormControl('',Validators.required),
        home_phone:new FormControl('',[Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        cell_phone:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl('',[Validators.email]),
        allergies:new FormControl('',[Validators.pattern(/^[a-zA-Z]+$/)]),
        class_id: new FormControl(this.router.url.split('/')[2])
      });
      
     }
    
  }
  getErrorMessage(c:FormControl,str:string){
     return this.formService.getError(c,str);
  }
  dateFormatter(){
       let date = formatDate(new Date(this.Attendee.get('date_of_birth').value),"yyyy-MM-dd","en-US");
       this.Attendee.get('date_of_birth').setValue(date);
  }
 
  addAttendee(){
    console.log(this.Attendee.value);
     this.dateFormatter();
     this.formService.submitAttendee(this.Attendee.value).subscribe(data=>{
       if(data['inserted']){
        this.snackBar.open("success ✔","",{duration:2000,verticalPosition:'top'})
        this.formDismiss();
       }

     },
     err=>{
      this.snackBar.open('failed ✕','',{duration:2000,verticalPosition:'top'});
     })
      
  }
  addGuardian(){
    this.formDismiss();
    this.openGuardian.emit({
      
    })
  }
  formDismiss(){
    this.sheetRef.dismiss();
  }
  ngOnInit() {
      
  }

}
