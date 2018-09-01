import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassDataService } from '../../services/class-data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-classmain',
  templateUrl: './classmain.component.html',
  styleUrls: ['./classmain.component.css']
})
export class ClassmainComponent implements OnInit {
  public Attendees;
  displayedColumns: string [] = ['avatar','name','dob','editable']
  dataSource: MatTableDataSource<{}[]>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public cdata:ClassDataService) { 

  }
  getAttendees(){
    this.cdata.getAttendees().subscribe(data=>{
      this.Attendees = data['info'];
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
