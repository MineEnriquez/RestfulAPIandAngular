import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;    //Angular provides us @Input decorator by using that we can pass data from parent component to child component.
  nametodisplay:string;
  constructor() { }

  ngOnInit() { 
   
    this.nametodisplay =" Bonita!!";
  }

}
