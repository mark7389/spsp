import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AttendeeDataService {
  private AttendeeId;
  private ClassId;
  private image = new Image();
  private canvas = document.createElement('canvas');
  private Token = localStorage.getItem('user');
  constructor(private http:HttpClient, private router:Router) { 
    
  }
  resizeImg(ImgData){
      let contentType = ImgData.split(':')[1].split(';')[0];
      this.image.src = ImgData;
      
      return new Promise((resolve,reject)=>{
        this.image.onload = ()=>{
          let ratio = this.image.width/this.image.height;
          let imgWidth = 150;
          let imgHeight = 150/ratio;
          this.canvas.width = imgWidth;
          this.canvas.height =imgHeight;
          let ctx = this.canvas.getContext('2d');
          ctx.drawImage(this.image,0,0,imgWidth,imgHeight);
          let newIMGSize = this.canvas.toDataURL(contentType).length;
          console.log(newIMGSize);
          if(newIMGSize){
            resolve(this.canvas.toDataURL(contentType));
          }
          else{
            reject(false);
          }
          }
      })
      
  }
  getAttendee(){
    this.AttendeeId = this.router.url.split('/')[3];
    this.ClassId = this.router.url.split('/')[2];
    return this.http.get(`/api/modify/attendee/${this.Token}/${this.AttendeeId}/${this.ClassId}`);
  }
  uploadImage(image){
    return this.http.post(`/api/modify/image/${this.AttendeeId}/${this.Token}`, image);
  }
  
  
}
