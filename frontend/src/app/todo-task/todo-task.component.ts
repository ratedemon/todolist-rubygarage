import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {Task} from '../shared/task';
import {DataService} from '../shared/data.service';
import {Response} from '@angular/http';

@Component({
  selector: 'todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input() item: Project;
  @Input() projects: Project[];
  @Input() task: Task;
  user: any;
  changed: boolean = false;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.initUser().subscribe(data=>{this.user=data;});
  }
  removeTask(todo: Project, mission: Task){
    this.dataService.removeTask(todo.title, mission.text, this.user).subscribe((data:Response)=>{
      let arr = this.searchTask(todo, mission);
      this.projects[arr[0]].arrayTask.splice(arr[1],1);
    }, (err)=>{
      console.log(err);
    });
  }
  private searchTask(todo, mission){
    let indexTodo = this.projects.indexOf(todo);
    let indexTask = this.projects[indexTodo].arrayTask.indexOf(mission);
    let arr = [indexTodo, indexTask];
    return arr;
  }
  toggle(project: Project, task:Task, input: HTMLInputElement){
    this.dataService.toggleTask(project.title, input.value, this.user).subscribe(data=>{
      task.done = !task.done;
    }, (err)=>{
      console.log('ERR: ' + err);
    })
  }
  rewriteTask(project: Project, task: Task, input: HTMLInputElement){
    this.dataService.rewriteTask(project, task, input.value, this.user).subscribe(data=>{
      this.changed = !this.changed;
    },(err)=>{
      console.log(err);
    })
  }
}
