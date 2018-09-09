import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AttendeeDataService {
  private Token = localStorage.getItem('user');
  constructor(private http:HttpClient, private router:Router) { }
  
  getAttendee(){
    let attendeeId = this.router.url.split('/')[3];
    let classId = this.router.url.split('/')[2];
    return this.http.get(`/api/modify/attendee/${this.Token}/${attendeeId}/${classId}`);
  }
  uploadImage(image){
    return this.http.post(`/api/modify/image/${this.Token}`, image);
  }
  
  
}
