import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProjectTasksComponent } from './todo-project-tasks.component';

describe('TodoProjectTasksComponent', () => {
  let component: TodoProjectTasksComponent;
  let fixture: ComponentFixture<TodoProjectTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoProjectTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProjectTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
