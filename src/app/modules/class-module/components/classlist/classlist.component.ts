import { Component, OnInit } from '@angular/core';
import { ClassDataService } from '../../services/class-data.service';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { sanitizeResourceUrl } from '@angular/core/src/sanitization/sanitization';
import {  DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})

export class ClasslistComponent implements OnInit {
  public Attendees;
  public Attendance;
  public date = new Date().toISOString().split('T')[0];
  public previousClassDates = [];
  public justLoaded: boolean = true;
  constructor(public cdata:ClassDataService, public router:Router, public snackBar:MatSnackBar, public sanitize: DomSanitizer) { }
  getDates(){
    this.cdata.getClassDates().subscribe(data=>{
      this.previousClassDates = data['dates'].map(elem=>{
        
            return elem.class_date.split('T')[0];
      });
    })
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
    return tmp;
  }
  buildAttendance(id:number,checked:boolean){
   this.justLoaded = false;
   let alength = this.Attendance.length;
  
   if(alength){
     for(let i = 0; i < alength ; i++){
       let checkbox = document.getElementById(`${this.Attendees[i].attendee_id}-span`)
       if(this.Attendance[i].attendee_id == id){
         if(checkbox.classList[1]){
          this.Attendance[i].present = 0;

         }else{
          this.Attendance[i].present = 1;
         }
       }
     } 
   }
   console.log(JSON.stringify(this.Attendance));
 
  }
  sanitizer(url:string){
    return this.sanitize.bypassSecurityTrustUrl(url);
  }
  getAttendance(date){
    console.log(date);
    this.cdata.getClassAttendees(date).subscribe(data=>{
      console.log(data);
      this.Attendees = data['info'].map(elem=>{
            if(elem.picture){
              let arrayBuffer = new Uint8Array(elem.picture);
              let blob = new Blob([arrayBuffer],{type:'image/jpg'});
              let urlCreate = window.URL;
              console.log(urlCreate);
              elem.picture = (urlCreate.createObjectURL(blob));
              console.log(elem.picture);
            }
            
            return elem;
            
      })
      this.Attendance = this.createAttendance(this.Attendees);
      
     console.log(this.Attendance);
  });
  }
  handleDatePicker($event: MatDatepickerInputEvent<Date>){
        this.date = $event.value.toISOString().split('T')[0];
        this.getAttendance(this.date);
        
  }
  handlePrevious($event){
    this.date = $event;
    this.getAttendance(this.date);
  }
  
  submitAttendance(){
    if(!this.justLoaded){
      this.cdata.takeAttendance(this.Attendance).subscribe(data=>{
        console.log(JSON.stringify(data));
        if(data){
          
          this.getAttendance(this.date);
          
          this.snackBar.open('success','',{duration:2000,verticalPosition:'top'});
          this.getDates();
          
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
  searchFunction($event){
    
    let filter, table, tr, td, i, j;
    filter = $event.target['value'].toUpperCase();
    table = document.getElementById("aTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        if (td) {
          
          if (td[1].innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        } 
    }
  }
  ngOnInit() {
    
    this.getDates();
    this.getAttendance(this.date);
    
  }

}
