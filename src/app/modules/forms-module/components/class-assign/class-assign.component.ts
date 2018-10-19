import { Component, OnInit,Inject } from '@angular/core';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-class-assign',
  templateUrl: './class-assign.component.html',
  styleUrls: ['./class-assign.component.css']
})
export class ClassAssignComponent implements OnInit {
  classId;
  classes;
  submit;
  constructor(private formService:FormdatasubmitService,public sheetRef: MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,public fb:FormBuilder) {
    this.classId = this.data.class_id; 
    this.submit = this.fb.group({
        newClass: new FormControl('',Validators.required)
      })
  }
  assignNewClass(){
    this.formService.moveFromClass(this.data.attendee_id,this.classId,this.submit.get('newClass').value,this.data.class_date)
    .subscribe(data=>{
      if(data){
        this.sheetRef.dismiss();
      }
    })
  }
  ngOnInit() {
    
    this.formService.getClassesForService(this.classId).subscribe(data=>{
      console.log(data);
      if(data){
        this.classes = data[0];
      }
    })
  }

}
