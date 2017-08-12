import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'todo-project-header',
  templateUrl: './todo-project-header.component.html',
  styleUrls: ['./todo-project-header.component.css']
})
export class TodoProjectHeaderComponent implements OnInit {
  @Input() item: Project;
  user: any;
  @Input() projects: Project[];
  private changed = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.initUser().subscribe(data=>{this.user=data;});
  }
  onRewrite(project: Project, input: HTMLInputElement){
    this.dataService.rewriteProject(this.user, project, input.value).subscribe(data=>{
      console.log(data);
      this.changed = !this.changed;
    }, (err)=>{
      console.log(err);
    })
  }
  onRemove(project: Project){
    this.dataService.removeProject(this.user, project).subscribe(data=>{
      let index = this.projects.indexOf(project);
      this.projects.splice(index,1);
    }, (err)=>{
      console.log(err);
    });
  }
}
