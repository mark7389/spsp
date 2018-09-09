import { Component, OnInit } from '@angular/core';
import { FormdatasubmitService } from '../../../forms-module/services/formdatasubmit.service';
import { AttendeeDataService } from '../../services/attendee-data.service';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  reader = new FileReader();
  file;
  constructor(public cData:AttendeeDataService) { }
  handleUpload($event){
      this.reader.readAsDataURL($event.target.files[0]);
      this.reader.onloadend = ()=>{
          this.file = this.reader.result
          console.log(this.file.length)
      }
  }
  submit(e){
        console.log('7a7a');
        e.preventDefault();
        this.cData.uploadImage(this.file).subscribe(data=>{
          console.log(data);
        })
  }
  ngOnInit() {
  }

}
