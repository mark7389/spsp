import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassDataService } from '../../services/class-data.service';
import {MatPaginator, MatSort, MatTableDataSource,MatBottomSheet, MatBottomSheetRef, MatDatepickerInputEvent, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { AttendeeformComponent } from '../../../forms-module/components/attendeeform/attendeeform.component';
import { ImageconverterService } from '../../../../shared/imageconverter.service';
import { formatDate } from '@angular/common';

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
   this.justLoaded = false;
   let alength = this.Attendance.length;
  console.log(id, checked);
   if(alength){
       let checkbox = document.getElementById(`${this.Attendees[index].attendee_id}-span`)
       if(this.Attendance[index].attendee_id == id){
         this.Attendance[index].present = 
         this.Attendance[index].present ? 0 : 1;
       } 
   }
 
  }
  getUserRole($event){
      
      this.UserRole = $event;
  }
  getAttendance(date){
    this.cdata.getClassAttendees(date).subscribe(async data=>{
      console.log(data['info']);
      this.Attendance = this.createAttendance(data['info']);
      console.log (this.Attendance);
      this.Attendees = await Promise.all(data['info'].map(async elem=>{
          let x = new ImageconverterService()
          if(elem.picture){
            elem.picture = await x.convert(elem.picture)
            
            return elem
          }else{
            return elem
          }
          
      }))
      console.log(this.Attendees);
      this.dataSource = new MatTableDataSource(this.Attendees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.justLoaded = false;
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
    if(!this.justLoaded){
      this.cdata.takeAttendance(this.Attendance).subscribe(data=>{
        console.log(JSON.stringify(data));
        if(data){
          
          this.getAttendance(this.date);
          
          this.snackBar.open('success','',{duration:2000,verticalPosition:'top'});
          // this.disable = true;
          // this.getDates();
          
        }
        else{
          ///handle write error
          alert("couldn't save attendance, please try again")
        }
      })
    }
    else{
      alert('nothing to save!!!')
    }
    
  }
  showBottomSheet():void {
       this.bottomsheet.open(AttendeeformComponent);
       this.bottomsheet._openedBottomSheetRef.afterDismissed().subscribe(ref=>{
         this.getAttendees();
       })
  }
  getAttendees(){
    this.cdata.getAttendees().subscribe(async data=>{
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
    })
  }
  ngOnInit() {
    // this.getAttendees();
    this.getAttendance(this.date);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
