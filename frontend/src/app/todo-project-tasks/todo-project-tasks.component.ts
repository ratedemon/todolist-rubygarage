import { Component, OnInit, Input } from '@angular/core';
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-project-tasks',
  templateUrl: './todo-project-tasks.component.html',
  styleUrls: ['./todo-project-tasks.component.css']
})
export class TodoProjectTasksComponent implements OnInit {
  @Input() project;
  @Input() projects;
  constructor(private newDataService: NewDataService, private router: Router) { }

  ngOnInit() {
  }

  transferDataSuccess(e){
    const sort_tasks = [];
    this.project.ProjectTasks.forEach((el, i)=>{
      sort_tasks.push({id: el.id, position: i});
    });
    this.newDataService.changePosition(sort_tasks, this.project.id).subscribe(res=>{
      console.log(res);
    }, err=>{
      alert(err.message);
      this.router.navigate(['/projects']);
    });
  }
}
