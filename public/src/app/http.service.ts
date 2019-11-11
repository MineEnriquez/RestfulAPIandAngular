import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

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
    return this._http.get('/api/tasks/retrieveall'); //now this function will only invoke the call to the API instead of handling it.
  }
  getById(data: Object) {
    return this._http.get('/api/tasks/retrieveId/' + data['id']); /* Same with this one */
  }
  getByTitle(data: Object) {
    console.log(`service request for task: ${data['title']}`);
    return this._http.get('/api/tasks/retrieveTitle/' + data['title']);   /* And this one*/
  }
  e2endtest(num: any) {
    return this._http.post('/e2etest', num);
  }
  getTaskById(data: Object) {
    console.log(data['id']);
    return this._http.get('/api/tasks/retrieveId/' + data['id']); /* Same with this one */

  }
}

