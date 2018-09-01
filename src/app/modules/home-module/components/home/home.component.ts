import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GetClassesServicesService} from '../../services/get-classes-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  classArray;
  
  
  constructor(public getClasses:GetClassesServicesService ) { 
    
  }
  
  
  ngOnInit() {
      this.getClasses.fetchClasses().subscribe(data=>{
        this.classArray = data;
        console.log(data);
      })
  }

}
