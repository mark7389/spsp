import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmenuitemsService {
  private UserToken:string;
  constructor(private http:HttpClient) {
    this.UserToken = localStorage.getItem('user') || "";
   }

  fetchMenuItems(){
    if(this.UserToken !== ""){
       return this.http.get(`/api/modify/menu/${this.UserToken}`)
    }
  }
}
