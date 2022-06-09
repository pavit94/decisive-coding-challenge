import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { peopleData } from 'src/app/peopledata';
import { MainService } from 'src/main.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.scss']
})
export class PeopleEditComponent implements OnInit {
  data : peopleData;
  constructor(private router: Router,
    private mainService : MainService) { }

  ngOnInit(): void {
 
    this.mainService.peopleDetails$.subscribe(record => {
     
    }
      );

   
  }
  returnToList() : void {
    this.router.navigateByUrl('');
  }
  saveData() : void{

  }
  onSubmit() {
    console.log('submit')
  }
}
