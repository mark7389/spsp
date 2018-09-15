import { Component, OnInit, ViewChild } from '@angular/core';
import { FormdatasubmitService } from '../../../forms-module/services/formdatasubmit.service';
import { AttendeeDataService } from '../../services/attendee-data.service';
import { MatBottomSheetRef } from '@angular/material';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  // @ViewChild('upImg')
  // uploadedImg: HTMLImageElement
  reader = new FileReader();
  file;
  imgSrc:string = "";
  constructor(public cData:AttendeeDataService, public sheetRef:MatBottomSheetRef) { 
   
  }
  handleUpload($event){
    if($event.target.files[0]['type'].indexOf('image') > -1){
      console.log($event.target.files[0]);
      this.reader.readAsDataURL($event.target.files[0]);
      this.reader.onloadend = ()=>{
          this.file = this.reader.result
          this.cData.resizeImg(this.file).then(imgdata=>{
                  this.imgSrc = imgdata.toString();
                  let uploadedImg = document.getElementById('uploadedImg');
                  uploadedImg.setAttribute('src',this.imgSrc); 
                  uploadedImg.style.visibility = 'visible';  
                  
          },err=>{

          }); 
      }
    }
      
  }
  submit(e){
        
        e.preventDefault();
        this.cData.uploadImage(this.imgSrc).subscribe(data=>{
             this.sheetRef.dismiss();
        })
  }
  ngOnInit() {
  }

}
