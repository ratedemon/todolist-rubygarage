import { Component, OnInit, Input } from '@angular/core';
import { Project} from '../shared/project';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'todo-projects-form',
  templateUrl: './todo-projects-form.component.html',
  styleUrls: ['./todo-projects-form.component.css']
})
export class TodoProjectsFormComponent implements OnInit {
  @Input() item: Project;
  @Input() user: any;
  @Input() projects: Project[];
  task = '';
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  addTask(input: HTMLInputElement, project: Project){
    if(!input.value.trim()){
      return;
    }
    this.dataService.addTask(input.value, project, this.user).subscribe(data=>{
      let index = 0;
      let indexTodo = this.projects.find((elem, item)=>{
        if(elem.title === project.title){
          index = item;
          return true;
        }
        return false;
      })
      this.projects[index].arrayTask.push({text: input.value, done: false});
      this.task = "";
    }, (err)=>{
      console.log(err);
    });
  }
}
