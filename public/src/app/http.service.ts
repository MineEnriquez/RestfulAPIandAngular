import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getById("5dc76f608d5c09540cf7d82f");
    this.getByTitle("task 4");
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/api/tasks/retrieveall');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getById(_id: string) {

    let tempobservable = this._http.get('/api/tasks/retrieveId/' + _id);
    tempobservable.subscribe(data => console.log("Got our tasks!", data));

  }
  getByTitle(_title: string) {
    let tempobservable = this._http.get('/api/tasks/retrieveTitle/' + _title);
    tempobservable.subscribe(data => console.log("Got our tasks!", data));
  }

}

