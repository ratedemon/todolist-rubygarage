import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';
import {DataService} from '../shared/data.service';
import {LoginService} from '../shared/login.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  user: any;
  projects: Project[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.initUser().subscribe(data=>{this.user = data;
      console.log(this.user);
      this.dataService.getProjects(this.user).subscribe(data=>this.projects = data, err=>console.log(err));
    });
  }

}
