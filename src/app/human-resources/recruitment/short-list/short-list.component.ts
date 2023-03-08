import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.css']
})
export class ShortListComponent implements AfterViewInit {

  displayedColumns: string[] = ['Name', 'Mobile number', 'Job', 'Experience years', 'Actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;


  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;

  }

 

}
