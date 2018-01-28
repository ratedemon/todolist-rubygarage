import { Component, Input } from '@angular/core';
import { Project} from '../shared/project';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'todo-projects-form',
  templateUrl: './todo-projects-form.component.html',
  styleUrls: ['./todo-projects-form.component.css']
})
export class TodoProjectsFormComponent{
  @Input() item;
  @Input() projects;
  task = '';
  constructor(private newDataService: NewDataService) { }

  addTask(input: HTMLInputElement, project){
    if(!input.value.trim()){
      return;
    }
    this.newDataService.addTask(input.value, project.id).subscribe(data => {
      let index = 0;
      this.projects.forEach((el, i) => {
        if(el.id == project.id){
          index = i;
        }
      });
      this.projects[index].ProjectTasks.push({name: input.value, status: false});
      this.task = "";
    },err => console.log(err));
  }
}
