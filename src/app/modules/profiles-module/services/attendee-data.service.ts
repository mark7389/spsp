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
    let id = this.router.url.split('/')[3];
    return this.http.get(`/api/modify/attendee/${this.Token}/${id}`);
  }
  addNote(note){
    let id = this.router.url.split('/')[3];
    let classId = this.router.url.split('/')[2];
    let date = new Date().toISOString();
    return this.http.post(`/api/modify/note/${this.Token}`,{attendee_id:id,class_id:classId,note:note,note_date:date});
  }
  updateImage(Img){

  }
}
