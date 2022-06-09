import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  name = '';
  isactive = '';
  age = 0;
  about = '';
  gender = '';
  genderm : boolean = true;
  genderControl = new FormControl('');
  activeControl = new FormControl('');
  nameControl = new FormControl('',[Validators.maxLength(70),  Validators.required]);
  ageControl = new FormControl('',[Validators.max(100), Validators.min(18), Validators.required]);
  constructor(private router: Router,
    private mainService : MainService) { }

  ngOnInit(): void {
  this.name = localStorage.getItem('name');
 this.isactive  = localStorage.getItem('isActive');
 this.age = Number(localStorage.getItem('Age'));
 this.about = localStorage.getItem('About');
 this.gender = localStorage.getItem('Gender');
 if(this.gender === 'male') {
  this.genderControl.setValue('Male');
 } else {
  this.genderControl.setValue('Female');
 }
 if(this.isactive === 'true') {
   this.activeControl.setValue('Active');
 } else {
  this.activeControl.setValue('Disabled');
 }
  }
  returnToList() : void {
    this.router.navigateByUrl('');
  }
  saveData() : void{
    
  }
}
