import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetmenuitemsService } from '../../services/getmenuitems.service';
import {AuthService} from '../../../login-module/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public MenuItems:[string];
  public url;
  public subUrl;
  role:string;
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  constructor(public getMenu:GetmenuitemsService,public auth:AuthService,public router:Router) { }
  toggle($event){
    
    document.getElementById('menuButton').classList.toggle('change');
    document.getElementById('sidenav').classList.toggle('show'); 
    
      
 }
 logOut(){
  this.auth.logout();
  
 }
  ngOnInit() {
      this.url = this.router.url.split('/');
      
      this.getMenu.fetchMenuItems().subscribe(data=>{
        console.log(data);
        this.MenuItems = data["items"].split(',');
        this.role = data['role_name'];
        this.change.emit(this.role);
        this.subUrl = this.MenuItems.map(elem=>{
            return elem.split(" ")[1];
        })
      })
  }

}
