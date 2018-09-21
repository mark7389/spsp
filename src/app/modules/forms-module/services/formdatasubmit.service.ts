import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormdatasubmitService {
  errors:ValidationErrors = {
    required: "this field is required",
    regex: "please enter a valid format",
    email: "please enter a valid email address",
    phone: "please enter a valid phone number (10 digits)",
    pic: "please upload a valid image",
    onSubmit: "please fix errors before save",
    street_num:"can contain capital letters and numbers only",
    zip: "can contain capital letters and numbers only/length is 6"
}
Token = localStorage.getItem('user');
  constructor(private router: Router, private http: HttpClient) { }
  getError(c,elem){
    console.log(c);
    console.log(elem);
    switch (Object.keys(c.errors)[0]){
      case 'required': return this.errors.required;
      case 'email': return this.errors.email;
      case 'maxLength': return elem === "zip_code" ? this.errors.zip : this.errors.phone;
      case 'pattern': return elem === "unit_number" || elem === "street_number" || elem === "zip_code" ? this.errors.street_num : this.errors.regex;
      default: return '';
    }
  }
  getStreetNumber(str){
     return str.indexOf('/') > -1 ? str.split('/')[0]:""
  }
  getStreetName(str){
   return str.indexOf('/') > -1 ? str.split('/')[1]:""
  }
  getUnit(str){
    return str.indexOf('/') > -1 ? str.split('/')[2]:""
  }
  getCity(str){
    return str.indexOf('/') > -1 ? str.split('/')[3]:""
  }
  getProvince(str){
    return str.indexOf('/') > -1 ? str.split('/')[4]:""
  }
  getZipCode(str){
    return str.indexOf('/') > -1 ? str.split('/')[5]:""
  }
  buildAttendeeData(obj){
    let data = {
      id: obj.id || null,
      first_name: obj.first_name,
      last_name: obj.last_name,
      address: obj.street_number +"/"+obj.street_name+"/"+obj.unit_number+"/"+obj.city+"/"+obj.province+"/"+obj.zip_code,
      date_of_birth: obj.date_of_birth,
      gender: obj.gender,
      home_phone: obj.home_phone,
      cell_phone: obj.cell_phone,
      email: obj.email,
      allergies: obj.allergies,
      class_id: obj.class_id || null
    }
    return data;
  }
  submitAttendee(obj){
      let submit_data = this.buildAttendeeData(obj);
     return this.http.post(`/api/modify/attendee/update/${this.Token}`,submit_data);
  }
  submitGuardian(obj){
       return this.http.post(`/api/modify/guardian/update/${this.Token}`,obj)
  }
  submitNote(obj){
        return this.http.post(`/api/modify/note/${this.Token}`,obj)
  }
  
  
}
