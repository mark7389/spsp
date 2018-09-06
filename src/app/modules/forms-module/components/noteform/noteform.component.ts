import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormdatasubmitService } from '../../services/formdatasubmit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
export class NoteformComponent implements OnInit {
  Note: FormGroup;
  constructor(public router:Router, public sheetRef:MatBottomSheetRef,@Inject(MAT_BOTTOM_SHEET_DATA) public data:any,
  public fb:FormBuilder, public formService:FormdatasubmitService) {
    if(this.data){
      this.Note = this.fb.group({
        id: new FormControl(this.data.id),
        attendee_id: new FormControl(this.data.attendee_id),
        class_id: new FormControl(this.data.class_id),
        note_date: new FormControl(this.data.note_date),
        note: new FormControl(this.data.note, Validators.required)
      })
    }else{
      this.Note = this.fb.group({
        attendee_id: new FormControl(this.router.url.split('/')[3]),
        class_id: new FormControl(this.router.url.split('/')[2]),
        note_date: new FormControl(new Date().toISOString()),
        note: new FormControl('', Validators.required)
      })
    }
   }
   getErrorMessage(c:FormControl){
    
    return this.formService.getError(c);
 }
 formDismiss(){
  this.sheetRef.dismiss();
}
  ngOnInit() {
  }

}
