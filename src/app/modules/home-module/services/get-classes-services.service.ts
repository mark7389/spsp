import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class GetClassesServicesService {

  constructor(private http:HttpClient) { }
  fetchClasses(){
    let userToken = localStorage.getItem('user')
    if(userToken){
       return this.http.get(`/api/modify/classes/${userToken}/`);
    }
  }
}
