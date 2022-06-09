import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl : string = 'http://localhost:4500/';
  private _peopleDetails = new Subject();
  peopleDetails$ = this._peopleDetails.asObservable();
  constructor(private http: HttpClient) { }
  getPeople(people : string) {
    return this.http.get(this.apiUrl + people);
  }
  sendPeopleDetails(record ) {
    // console.log('service :' + (JSON.stringify(record)));
    this._peopleDetails.next(record);
  }
}
