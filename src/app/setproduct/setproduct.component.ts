import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {

  toggleField: string ;
  dataSource: MatTableDataSource<any>;
  savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    members: any[];
    private querySubscription;
  constructor(private _backendService : BackendService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  ngOnInit() {
    this.toggleField = "searchMode";
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource= new MatTableDataSource(this.members);
  }
toggle(filter){
  if(!filter) { filter = "searchMode"}
  else { filter = filter;}
  this.toggleField = filter;
}
getData() {
  this.dataLoading = true;
  this.querySubscription = this._backendService.getProducts('product')
      .subscribe(members => {
          this.members = members;
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      },
      (error) => {
        this.error=true;
        this.errorMessage=error.errorMessage;
        this.dataLoading= false;
      },
() => {this.error = false; this.dataLoading = false; }
      );

}

applyFilter(filterValue: string) {
  
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
