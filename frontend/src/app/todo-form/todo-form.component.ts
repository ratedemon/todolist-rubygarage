import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../shared/project';
import {formAnim} from '../shared/animations'
import {DataService} from '../shared/data.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  animations: [formAnim]
})
export class TodoFormComponent implements OnInit {
  @Input() projects: Project[];
  @Input() user;
  private title = "";
  private formActive: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  show(){
    this.formActive = !this.formActive;
  }
  addTitle(title: HTMLInputElement){
    if(!title.value.trim()){
      return;
    }
    this.dataService.createProject(title.value, this.user).subscribe(data=>{
      this.projects.push({title: title.value, arrayTask: []});
      this.title = "";
      this.show();
    }, (err)=>{
      console.log(err);
    })
  }
}
