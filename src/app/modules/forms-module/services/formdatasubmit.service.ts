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
    regex: "please enter a valid format (numbers only for phones or letters only for names)",
    email: "please enter a valid email address",
    phone: "please enter a valid phone number (10 digits)",
    pic: "please upload a valid image",
    onSubmit: "please fix errors before save"
}
Token = localStorage.getItem('user');
  constructor(private router: Router, private http: HttpClient) { }
  getError(c){
    switch (Object.keys(c.errors)[0]){
      case 'required': return this.errors.required;
      case 'email': return this.errors.email;
      case 'maxLength': return this.errors.phone;
      case 'pattern': return this.errors.regex;
      default: return '';
    }
  }
  submitAttendee(obj){
      return this.http.post(`/api/modify/attendee/update/${this.Token}`,obj);
  }
  submitGuardian(obj){
       return this.http.post(`/api/modify/guardian/update/${this.Token}`,obj)
  }
  submitNote(obj){
        return this.http.post(`/api/modify/note/${this.Token}`,obj)
  }
  
  
}
