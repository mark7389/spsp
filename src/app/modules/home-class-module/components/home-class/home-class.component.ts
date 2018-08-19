import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-home-class',
  templateUrl: './home-class.component.html',
  styleUrls: ['./home-class.component.css']
})
export class HomeClassComponent implements OnInit {

  constructor() { }

  @Input()
  Services: any 
 
  ngOnInit() {
  }

}
