import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {Task} from '../shared/task';
import {DataService} from '../shared/data.service';
import {Response} from '@angular/http';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input() item: Project;
  @Input() projects;
  @Input() task;
  changed: boolean = false;
  constructor(private dataService:DataService, private newDataService: NewDataService) { }

  removeTask(project, task){
    this.newDataService.removeTask(project, task).subscribe(res => {
        let arr = this.searchTask(project, task);
        this.projects[arr[0]].ProjectTasks.splice(arr[1],1);
    },err=>console.log(err));
  }
  toggle(project: Project, task:Task, input: HTMLInputElement){
    this.newDataService.toggleTask(project, task).subscribe(res => {
      this.task.status = !this.task.status;
    }, err=>console.log(err));
  }
  rewriteTask(project: Project, task: Task, input: HTMLInputElement){
    this.newDataService.renameTask(project, task, input.value).subscribe(res=>{
      this.changed = !this.changed;
    }, err => console.log(err));
  }
  private searchTask(todo, mission){
    let indexTodo = this.projects.indexOf(todo);
    let indexTask = this.projects[indexTodo].ProjectTasks.indexOf(mission);
    let arr = [indexTodo, indexTask];
    return arr;
  }
}
