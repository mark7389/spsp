import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multipleguardian',
  templateUrl: './multipleguardian.component.html',
  styleUrls: ['./multipleguardian.component.css']
})
export class MultipleguardianComponent implements OnInit {
  Guardians:FormGroup
  constructor(public snackBar: MatSnackBar,public router:Router ,
  public sheetRef: MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) 
  public data: any,public fb:FormBuilder, private formService:FormdatasubmitService) {

        if(data){
          this.Guardians = this.fb.group({
            first_name1: new FormControl(''),
            last_name1:  new FormControl(''),
            phone1: new FormControl(''),
            first_name2: new FormControl(''),
            last_name2: new FormControl(''),
            street_number:new FormControl(data.street_number,[Validators.required,Validators.pattern(/^[A-Z0-9]+$/)]),
            street_name:new FormControl(data.street_name,[Validators.required]),
            unit_number: new FormControl(data.unit_number,Validators.pattern(/^[A-Z0-9]+$/)),
            city: new FormControl(data.city,[Validators.required]),
            province: new FormControl(data.province,[Validators.required]),
            zip_code:new FormControl(data.zip_code,[Validators.required,Validators.pattern(/^[A-Z0-9]+$/),Validators.maxLength(6)]),
          })
        }


   }

  ngOnInit() {
  }

}
