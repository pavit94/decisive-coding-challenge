import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MainService } from 'src/main.service';
import { peopleData } from '../peopledata';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA : peopleData[] = [];
  people : string = 'people';
  displayedColumns: string[] = ['name', 'registered', 'isActive','edit'];
  dataSource =  new MatTableDataSource<peopleData>(this.ELEMENT_DATA);
  constructor(private mainService : MainService) {
   }

  ngOnInit(): void {
    this.getPeopleData();
    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }
  ngAfterViewInit() : void {
    this.dataSource.paginator = this.paginator;
  }
  public getPeopleData() {
    this.mainService.getPeople(this.people).subscribe((data) => {
      this.dataSource.data = data as peopleData[];
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clearInput() {
    const filterValue= '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
