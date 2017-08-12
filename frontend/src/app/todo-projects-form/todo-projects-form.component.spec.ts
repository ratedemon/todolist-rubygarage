import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProjectsFormComponent } from './todo-projects-form.component';

describe('TodoProjectsFormComponent', () => {
  let component: TodoProjectsFormComponent;
  let fixture: ComponentFixture<TodoProjectsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoProjectsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
