import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {Task} from '../shared/task';
import {Response} from '@angular/http';
import {NewDataService} from '../shared/new-data.service';
import {Router } from '@angular/router';

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
  constructor(private newDataService: NewDataService, private router: Router) { }

  removeTask(project, task){
    this.newDataService.removeTask(project, task).subscribe(res => {
        let arr = this.searchTask(project, task);
        this.projects[arr[0]].ProjectTasks.splice(arr[1],1);
    },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
  toggle(project: Project, task:Task, input: HTMLInputElement){
    this.newDataService.toggleTask(project, task).subscribe(res => {
      this.task.status = !this.task.status;
    },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
  rewriteTask(project: Project, task: Task, input: HTMLInputElement){
    if(!input.value.trim().length){
      return;
    }
    this.newDataService.renameTask(project, task, input.value).subscribe(res=>{
      this.changed = !this.changed;
    } ,err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
  private searchTask(todo, mission){
    let indexTodo = this.projects.indexOf(todo);
    let indexTask = this.projects[indexTodo].ProjectTasks.indexOf(mission);
    let arr = [indexTodo, indexTask];
    return arr;
  }
}
