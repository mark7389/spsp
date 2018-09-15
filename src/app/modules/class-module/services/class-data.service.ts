import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClassDataService {
  private token = localStorage.getItem('user');
  private classId;
  
  constructor(public router:Router, public http:HttpClient) { }
  getClassDates(){
    this.classId = this.router.url.split('/')[2];
    return this.http.get(`/api/modify/classes/get_dates/${this.token}/${this.classId}`);
  }
  takeAttendance(arr){
    
    return this.http.post('/api/modify/attendees/take_attendance',{token:this.token,data:arr});
  }
  getClassAttendees(date){
    this.classId = this.router.url.split('/')[2];
    console.log(this.classId);
    
    return this.http.get(`/api/modify/attendees/${this.token}/${this.classId}/${date}`);
    
  }
  getAttendees(){
    this.classId = this.router.url.split('/')[2];
    return this.http.get(`/api/modify/classattendees/${this.token}/${this.classId}`);
  }
 
}
