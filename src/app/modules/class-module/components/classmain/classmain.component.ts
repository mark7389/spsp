import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassDataService } from '../../services/class-data.service';
import {MatPaginator, MatSort, MatTableDataSource,MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { Router } from '@angular/router';
import { AttendeeformComponent } from '../../../forms-module/components/attendeeform/attendeeform.component';



@Component({
  selector: 'app-classmain',
  templateUrl: './classmain.component.html',
  styleUrls: ['./classmain.component.css']
})
export class ClassmainComponent implements OnInit {
  public Attendees;
  displayedColumns: string [] = ['avatar','name','dob','editable']
  dataSource: MatTableDataSource<{}[]>
  class_id;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public cdata:ClassDataService, public router:Router, private bottomsheet: MatBottomSheet) { 
      this.class_id = this.router.url.split('/')[2];
      
  }
  showBottomSheet():void {
       this.bottomsheet.open(AttendeeformComponent);
       this.bottomsheet._openedBottomSheetRef.afterDismissed().subscribe(ref=>{
         this.getAttendees();
       })
  }
  getAttendees(){
    this.cdata.getAttendees().subscribe(data=>{
      this.Attendees = data['info'];
      console.log(this.Attendees);
      this.dataSource = new MatTableDataSource(this.Attendees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit() {
    this.getAttendees();
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
