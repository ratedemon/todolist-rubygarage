import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {Project} from '../shared/project';
import {DataService} from '../shared/data.service';
import {LoginService} from '../shared/login.service';
import {myAnim} from '../shared/animations';


@Component({
  selector: 'todo-project',
  templateUrl: './todo-project.component.html',
  styleUrls: ['./todo-project.component.css'],
  animations: [myAnim]
})
export class TodoProjectComponent implements OnInit, DoCheck {
  @Input() projects: Project[];
  user: any;
  constructor(private dataService:DataService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.dataService.initUser().subscribe(data=>{this.user=data;
      // this.dataService.getProjects().subscribe(data=>this.projects = data);
    });
  }
  ngDoCheck(){
    console.log(this.projects.length) ;
    
  }
}
