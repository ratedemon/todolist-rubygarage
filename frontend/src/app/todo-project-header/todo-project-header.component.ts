import { Component, Input } from '@angular/core';
import {Project} from '../shared/project';
import {DataService} from '../shared/data.service';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'todo-project-header',
  templateUrl: './todo-project-header.component.html',
  styleUrls: ['./todo-project-header.component.css']
})
export class TodoProjectHeaderComponent{
  @Input() item;
  @Input() projects;
  private changed = false;
  constructor(private dataService: DataService, private newDataService: NewDataService) { }

  onRewrite(project, input: HTMLInputElement){
    console.log(project, input);
    this.newDataService.renameProject(project.id, input.value).subscribe(res=>{
      this.changed = !this.changed;
    },err => console.log(err));
  }
  onRemove(project){
    this.newDataService.deleteProject(project.id).subscribe(data=>{
        let index = this.projects.indexOf(project);
        this.projects.splice(index,1);
      }, (err)=>{
        console.log(err);
      });
  }
}
