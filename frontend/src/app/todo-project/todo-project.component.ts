import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {Project} from '../shared/project';
import {myAnim} from '../shared/animations';


@Component({
  selector: 'todo-project',
  templateUrl: './todo-project.component.html',
  styleUrls: ['./todo-project.component.css'],
  animations: [myAnim]
})
export class TodoProjectComponent{
  @Input() projects: Project[];
  constructor() {}
}
