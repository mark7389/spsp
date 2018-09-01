import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetmenuitemsService {
  private UserToken:string;
  constructor(private http:HttpClient, private router:Router) {
    this.UserToken = localStorage.getItem('user') || "";
   }

  fetchMenuItems(){
    if(this.UserToken !== ""){
       return this.http.get(`/api/modify/menu/${this.UserToken}`);
    }
  }
  getClasses(){
    if(this.UserToken !== ""){
      return this.http.get(`/api/modify/classes/${this.UserToken}`);
    }
  }
}
