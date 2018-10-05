import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoorServiceService {
  private token = localStorage.getItem('user');
  
  constructor(public http:HttpClient) { }
  getServices(){
    return this.http.get(`/api/modify/coordinator/services/${this.token}`);
  }
  getUsers(){
    return this.http.get(`/api/modify/users/all/${this.token}`);
  }
  addServant(obj){
      let data = {
          id: obj.servant ?  obj.servant.id : null,
          first_name: obj.first_name ? obj.first_name : null,
          last_name: obj.last_name ? obj.last_name : null,
          email: obj.new_email ? obj.new_email : null,
          class_id: obj.class_id
      }
      return this.http.post(`/api/modify/servants/add/${this.token}`,data);
  }
  removeServant(obj){
      return this.http.get(`/api/modify/servants/remove/${this.token}/${obj.id}/${obj.class_id}`);
  }
}
