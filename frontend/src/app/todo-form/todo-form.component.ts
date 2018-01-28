import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {formAnim} from '../shared/animations'
import {DataService} from '../shared/data.service';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  animations: [formAnim]
})
export class TodoFormComponent{
  @Input() projects;
  private title = "";
  private formActive: boolean = false;
  constructor(private dataService: DataService, private newDataService: NewDataService) { }

  show(){
    this.formActive = !this.formActive;
  }
  addTitle(input: HTMLInputElement){
    if(!input.value.trim()){
      return;
    }
    this.newDataService.createProject(input.value).subscribe(res=>{
      this.projects.unshift(res.project);
      this.show();
    }, err => console.log(err));
  }
}
