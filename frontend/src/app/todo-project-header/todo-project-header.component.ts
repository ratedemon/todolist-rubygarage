import { Component, Input } from '@angular/core';
import {Project} from '../shared/project';
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'todo-project-header',
  templateUrl: './todo-project-header.component.html',
  styleUrls: ['./todo-project-header.component.css']
})
export class TodoProjectHeaderComponent{
  @Input() item;
  @Input() projects;
  changed = false;
  constructor(private newDataService: NewDataService, private router: Router) { }

  onRewrite(project, input: HTMLInputElement){
    console.log(project, input);
    this.newDataService.renameProject(project.id, input.value).subscribe(res=>{
      this.changed = !this.changed;
    },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
  onRemove(project){
    this.newDataService.deleteProject(project.id).subscribe(data=>{
        let index = this.projects.indexOf(project);
        this.projects.splice(index,1);
      },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
}
