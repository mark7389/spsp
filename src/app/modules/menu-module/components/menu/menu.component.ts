import { Component, OnInit } from '@angular/core';
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
  constructor(public getMenu:GetmenuitemsService,public auth:AuthService,public router:Router) { }
  toggle(){
    document.getElementById('menuButton').classList.toggle('change');
    document.getElementById('sidenav').classList.toggle('show');
    
 }
 logOut(){
  this.auth.logout();
  console.log('7a7a');
 }
  ngOnInit() {
      this.url = this.router.url.split('/');
      
      this.getMenu.fetchMenuItems().subscribe(data=>{
        this.MenuItems = data[0]["menu_items"].split(',');
       
      })
  }

}
