import { Component, OnInit, Input } from '@angular/core';
import {formAnim} from '../shared/animations'
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  animations: [formAnim]
})
export class TodoFormComponent{
  @Input() projects;
  private title = "";
  formActive: boolean = false;
  constructor(private newDataService: NewDataService, private router: Router) { }

  show(){
    this.formActive = !this.formActive;
  }
  addTitle(input: HTMLInputElement){
    if(!input.value.trim().length){
      return;
    }
    this.newDataService.createProject(input.value).subscribe(res=>{
      this.projects.push(res.project);
      this.title = '';
      this.show();
    },err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
}
