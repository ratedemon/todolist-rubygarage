import { Component, OnInit, Input } from '@angular/core';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'app-todo-project-tasks',
  templateUrl: './todo-project-tasks.component.html',
  styleUrls: ['./todo-project-tasks.component.css']
})
export class TodoProjectTasksComponent implements OnInit {
  @Input() project;
  @Input() projects;
  constructor(private newDataService: NewDataService) { }

  ngOnInit() {
  }

  transferDataSuccess(e){
    // console.log(e);
    const sort_tasks = [];
    this.project.ProjectTasks.forEach((el, i)=>{
      sort_tasks.push({id: el.id, position: i});
    });
    // console.log(sort_tasks);
    this.newDataService.changePosition(sort_tasks, this.project.id).subscribe(res=>{
      console.log(res);
    }, err=>console.log(err));
  }
}
