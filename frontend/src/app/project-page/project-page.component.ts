import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';
import {DataService} from '../shared/data.service';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';
import {NewDataService} from '../shared/new-data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  user: any;
  // projects: Project[] = [];
  projects = [];
  constructor(private dataService: DataService, private router: Router, private newDataService: NewDataService) {
    this.newDataService.projectList.subscribe(res=>{
      console.log(res);
      this.projects = res;
    });
  }

  ngOnInit() {
    this.newDataService.getProjects();
  }

}
