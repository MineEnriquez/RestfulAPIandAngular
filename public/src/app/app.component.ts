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
  
  task_title: string= "test";
  task_description: string= "test jijni";
  task_completed: boolean= false;
  taskObject: any= {title: "", description : "", completed: false};
  editTask: any= {_id: "", title: "", description : "", completed: false};
  tasks: any = [];


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.taskObject = {title: "", description : "", completed: false};
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got again our tasks");
      this.tasks = data;
      console.log(this.tasks);
    })
  }
  formSubmitNewTask(){
    let observable = this._httpService.newTask(this.taskObject);
    observable.subscribe(data => {
      console.log("New task created:");
      console.log(data);
      this.taskObject = {title: "", description : "", completed:false};
      this.getTasksFromService();
    })
  }
  onButtonClick(): void {
    console.log(`Click event is working`);
  }

  onButtonClickParam_e2eTest(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
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
      this.taskObject= info['data'];
      console.log("-------Got our data! ", _id, this.taskObject )
    });
  }
  taskDelete(event: Event): void {
    let _id = (<HTMLTextAreaElement>event.target).value;
    let observable = this._httpService.taskDelete({ id: _id });
    observable.subscribe(info => {
      this.getTasksFromService();
    });
  }
  displayTaskEdit(event: Event): void {
    let me = <HTMLTextAreaElement>event.target;
    let theform = me.parentElement.parentElement.getElementsByTagName("form");
      theform[0].setAttribute("class", "visible");

    let _id = (<HTMLTextAreaElement>event.target).value;
    console.log(_id);
    let observable = this._httpService.getById({ id: _id });
    observable.subscribe(info => {
      this.editTask= info['data'];
      console.log("-------Got our data! ", _id, this.editTask )
    });
  }
  taskEdit(event: Event): void {
    console.log(this.editTask._id);
    let num = this.editTask._id;
     let observable = this._httpService.taskEdit(num, this.editTask);
    observable.subscribe(info => {
      let me = <HTMLTextAreaElement>event.target;
      let theform = me.parentElement.parentElement.getElementsByTagName("form");
      console.log(theform);
        theform[0].setAttribute("class", "hidden");
      console.log("-------Got our data! ", info)
    });
  }
}