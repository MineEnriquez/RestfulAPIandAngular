import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  title = 'Welcome to MEAN';
  // num: number;
  // randNum: number;
  // first_name: string;
  // snacks: string[];
  // loggedIn: boolean;
  task_title: string;
  task_description: string;

  tasks: any = [];
  selectedTask: any = {title: "", description : ""};

  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.

  ngOnInit() {
    // this.getTasksFromService();
    // this.num = 7;
    // this.randNum = Math.floor((Math.random() * 2) + 1);
    // this.first_name = 'Alpha';
    // this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    // this.loggedIn = true;
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got again our tasks");
      this.tasks = data;
      console.log(this.tasks);
    })
  }

  onButtonClick(): void {
    console.log(`Click event is working`);
  }

  onButtonClickParam_e2eTest(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.e2endtest({ data: num });
    observable.subscribe(data => console.log("Got our data!", data));
  }

  onButtonClickParams(num: Number, str: String): void {
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }

  onButtonClickEvent(event: Event): void {
    console.log(`Click event is working with event: ${event}`);
  }
  getTask(event: Event): void {
    let _id = (<HTMLTextAreaElement>event.target).value;
    let observable = this._httpService.getById({ id: _id });
    observable.subscribe(info => {
      this.selectedTask= info['data'];
      console.log("-------Got our data! ", _id, this.selectedTask )
    });
  }
}