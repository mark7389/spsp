import { Component, ViewChild, HostListener, AfterViewInit } from '@angular/core';

import { MenuComponent } from './modules/menu-module/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewInit{
  title = 'spsp-attendance';
  
  ngAfterViewInit(){
  }
  
}
