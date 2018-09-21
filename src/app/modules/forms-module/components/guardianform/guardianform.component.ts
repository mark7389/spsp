import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardianform',
  templateUrl: './guardianform.component.html',
  styleUrls: ['./guardianform.component.css']
})
export class GuardianformComponent implements OnInit {
  Guardian: FormGroup
  
  constructor(public snackBar: MatSnackBar,public router:Router ,public sheetRef: MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,public fb:FormBuilder, private formService:FormdatasubmitService) { 
    
    if(this.data){
      this.Guardian = this.fb.group({
        id: new FormControl(data.id),
        attendee_id: new FormControl(data.attendee_id),
        first_name: new FormControl(data.first_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name: new FormControl(data.last_name,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        phone_number:new FormControl(data.phone_number === "None" || data.phone_number === "none" || data.phone_number === null ?
         '0000000000':data.phone_number ,[Validators.required, Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl(data.email,[Validators.required, Validators.email]),
        relationship: new FormControl(data.relationship,[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        address: new FormControl(data.address,[Validators.required])
      })
    }
    else{
      this.Guardian = this.fb.group({
        attendee_id: new FormControl(this.router.url.split('/')[3]),
        first_name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        last_name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        phone_number:new FormControl('0000000000',[Validators.required, Validators.maxLength(10),Validators.pattern(/^\d+$/)]),
        email:new FormControl('',[Validators.required, Validators.email]),
        relationship: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
        address: new FormControl('',[Validators.required])
      })
    }
  }
  getErrorMessage(c:FormControl,str:string){
    
    return this.formService.getError(c,str);
 }
 formDismiss(){
  this.sheetRef.dismiss();
}
addGuardian(){
  this.formService.submitGuardian(this.Guardian.value).subscribe(data=>{
     this.snackBar.open("success ✔","",{duration:2000,verticalPosition:'top'})
     this.sheetRef.dismiss();
  },err=>{
    this.snackBar.open("failure ✕","",{duration:2000,verticalPosition:'top'})
  })
}
  ngOnInit() {
  }

}
