import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl : string = 'http://localhost:4500/';
  constructor(private http: HttpClient) { }
  getPeople(people : string) {
    return this.http.get(this.apiUrl + people);
  }
}
