import { Component, OnInit } from '@angular/core';
import { CoorServiceService } from '../../services/coor-service.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-coor-home',
  templateUrl: './coor-home.component.html',
  styleUrls: ['./coor-home.component.css']
})
export class CoorHomeComponent implements OnInit {
  Services;
  quickservantAdd:FormGroup;
  available_servants;
  available_servants_filtered;
  formOpen:boolean = true;
  btnIcon = '+';
  constructor(public coorService:CoorServiceService, public fb:FormBuilder) {
      this.quickservantAdd = this.fb.group({
        servant:new FormControl(),
        class_id:new FormControl(),
        new_email: new FormControl('',Validators.email),
        first_name: new FormControl(),
        last_name: new FormControl()
      })
   }
  private _filter(str){
    const filterValue = str.toLowerCase();
    return this.available_servants.filter(servant => servant.first_name.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(obj){
    return obj ? (obj.first_name + " " + obj.email) : undefined;
  }
  showForm(i){
    if(this.formOpen){
      document.getElementById('quickForm'+i).style.display = 'block';
      this.formOpen = false;
      this.btnIcon = '-';
    }else{
      document.getElementById('quickForm'+i).style.display = 'none';
      this.formOpen = true;
      this.btnIcon = '+';
    }
    
  }
  addServant($event){
    $event.preventDefault();
    this.coorService.addServant(this.quickservantAdd.value).subscribe(data=>{
       console.log(data);
       this.coorService.getServices().subscribe(data=>{
        console.log(data);
        this.Services = data;
        })
       this.getUsers();
    })
  }
  removeServantFromClass(id,class_id){
    this.coorService.removeServant({id:id,class_id:class_id}).subscribe(data=>{
      console.log(data);
      this.coorService.getServices().subscribe(data=>{
        console.log(data);
        this.Services = data;
        })
       this.getUsers();
    })
  }
  getUsers(){
    this.coorService.getUsers().subscribe(data=>{
      console.log(data)
      this.available_servants = data
      this.available_servants_filtered = this.quickservantAdd.get('servant').valueChanges
                  .pipe(
                    startWith<string>(''),
                    map(name => this._filter(name))
                  );
    })
  }
  ngOnInit() {
    this.coorService.getServices().subscribe(data=>{
      console.log(data);
      this.Services = data;
    })
    this.getUsers();
  }

}
