import { Component, Input } from '@angular/core';
import { Project} from '../shared/project';
import {NewDataService} from '../shared/new-data.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'todo-projects-form',
  templateUrl: './todo-projects-form.component.html',
  styleUrls: ['./todo-projects-form.component.css']
})
export class TodoProjectsFormComponent{
  @Input() item;
  @Input() projects;
  task = '';
  constructor(private newDataService: NewDataService, private router: Router) { }

  addTask(input: HTMLInputElement, project: any){
    if(!input.value.trim().length){
      return;
    }
    this.newDataService.addTask(input.value, project.id, project.ProjectTasks.length).subscribe((data:Response) => {
      let index = 0;
      this.projects.forEach((el, i) => {
        if(el.id == project.id){
          index = i;
        }
      });
      this.projects[index].ProjectTasks.push(data);
      this.task = "";
    },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
}
