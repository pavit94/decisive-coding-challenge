import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { peopleData } from 'src/app/peopledata';
import { MainService } from 'src/main.service';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.scss'],
  // changeDetection: ChangeDetectionStrategy.markForCheck
})
export class PeopleViewComponent implements OnInit,AfterViewInit {
  // name : string = 'abc';
  name = '';
  isactive = '';
  age = 0;
  about = '';
  gender = '';
  data : peopleData;
  details : boolean = true;
  status : boolean = true;

  // Subscribe in Component

  constructor(private router : Router,
    private mainService : MainService,
    private changeDetector: ChangeDetectorRef,
    private ngZone: NgZone) { 
    }

  
  ngOnInit(): void {
    this.getValue();
  //  this.data =  JSON.parse(JSON.stringify(localStorage.getItem('viewRecord')));
  //  console.log('DATA' + (localStorage.getItem('name')));
 this.name = localStorage.getItem('name');
 this.isactive  = localStorage.getItem('isActive');
 this.age = Number(localStorage.getItem('Age'));
 this.about = localStorage.getItem('About');
 this.gender = localStorage.getItem('Gender');
  }
  ngAfterViewInit() {
  }
  getValue() {
   this.mainService
   .peopleDetails$.subscribe( record => {
      this.data = JSON.parse(JSON.stringify(record));
      this.ngZone.run( () => {
        // this.test += this.data.name;
        this.details = false;
     });
    })
  }
  
  returnToList() : void {
    this.router.navigateByUrl('');
  }
  getStatus(isActive) {
    if(isActive === 'true') {
      this.status = false;
      return 'is Active';
    } else {
      this.status = true;
      return 'Disabled';
    }
  }
  editPeople() {
    this.router.navigateByUrl('people/' +   localStorage.getItem('id') + '/edit');
  }
}
