import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassDataService } from '../../services/class-data.service';
import {MatPaginator, MatSort, MatTableDataSource,MatBottomSheet, MatBottomSheetRef, MatDatepickerInputEvent, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { AttendeeformComponent } from '../../../forms-module/components/attendeeform/attendeeform.component';
import { ImageconverterService } from '../../../../shared/imageconverter.service';
import { formatDate } from '@angular/common';
import { ClassAssignComponent } from 'src/app/modules/forms-module/components/class-assign/class-assign.component';

@Component({
  selector: 'app-classmain',
  templateUrl: './classmain.component.html',
  styleUrls: ['./classmain.component.css']
})
export class ClassmainComponent implements OnInit {
  public Attendees;
  public Attendance;
  public date = formatDate(new Date(),"yyyy-MM-dd","en-US","EST");
  disable: boolean = false;
  public previousClassDates = [];
  UserRole:string;
  public justLoaded: boolean = true;
  displayedColumns: string [] = ['avatar','name','dob','editable']
  dataSource: MatTableDataSource<{}[]>
  class_id;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public cdata:ClassDataService, public router:Router, private bottomsheet: MatBottomSheet,public snackBar:MatSnackBar) { 
      this.class_id = this.router.url.split('/')[2];
      
  }
  createAttendance(arr){
    
    let tmp = arr.map(elem=>{
      
        return {
          class_id: elem.class_id,
          attendee_id: elem.attendee_id,
          class_date: elem.class_date ? elem.class_date.split('T')[0]:this.date,
          present: elem.present ? elem.present : 0
        }
      
        
    });
    console.log(tmp);
    return tmp;
  }
  buildAttendance(id:number,checked:boolean,index:number){
   
   console.log(id,index,checked);
   this.Attendance.map(elem =>{
     if(elem.attendee_id == id){
       elem.present = elem.present ? 0:1;
     }
   });
   this.Attendees.map(elem =>{
    if(elem.attendee_id == id){
      elem.present = elem.present ? 0:1;
    }
  });    
}
moveToClass(id){
  this.bottomsheet.open(ClassAssignComponent,{data:{attendee_id:id,class_id:this.class_id,class_date:this.date}});
  this.bottomsheet._openedBottomSheetRef.afterDismissed().subscribe(ref=>{
    this.getAttendance(this.date);
  })
}
  getUserRole($event){
      
      this.UserRole = $event;
  }
  getAttendance(date){
    this.cdata.getClassAttendees(date).subscribe(async data=>{
      console.log(data['info']);
      this.Attendance = this.createAttendance(data['info']);
      this.Attendees = await Promise.all(data['info'].map(async elem=>{
        let x = new ImageconverterService()
          if(elem.picture){
            elem.picture = await x.convert(elem.picture)
            
            return elem
          }else{
            return elem
          }
          
      }))
      this.dataSource = new MatTableDataSource(this.Attendees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });
  }
  handleDatePicker($event: MatDatepickerInputEvent<Date>){
        this.date = $event.value.toISOString().split('T')[0];
        if(this.UserRole === "servant"){
          this.disable =  formatDate(new Date(),"yyyy-MM-dd","en-US","EST") !== this.date;
          console.log(formatDate(new Date(),"yyyy-MM-dd","en-US","EST") !== this.date)
        }
       
        this.getAttendance(this.date);
        
  }
  // handlePrevious($event){
  //   this.date = $event;
  //   this.getAttendance(this.date);
  // }
  
  submitAttendance(){
    
      this.cdata.takeAttendance(this.Attendance).subscribe(data=>{
        console.log(JSON.stringify(data));
        if(data){
          
          this.getAttendance(this.date);
          
          this.snackBar.open('success','',{duration:2000,verticalPosition:'top'});
          
        }
        else{
          ///handle write error
          alert("couldn't save attendance, please try again")
        }
      })
} 
  removeAttendee(id){
      this.cdata.removeAttendee(id,this.date).subscribe(data => {
        if(data['updated']){
          this.getAttendance(this.date);
          this.snackBar.open('success','',{duration:2000,verticalPosition:'top'});
        }else{
          this.snackBar.open('failed','',{duration:2000,verticalPosition:'top'});
        }
      })
  } 
  showBottomSheet():void {
       this.bottomsheet.open(AttendeeformComponent);
       this.bottomsheet._openedBottomSheetRef.afterDismissed().subscribe(ref=>{
         this.getAttendance(this.date);
       })
  }
  ngOnInit() {
    this.getAttendance(this.date);   
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
