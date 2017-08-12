import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProjectHeaderComponent } from './todo-project-header.component';

describe('TodoProjectHeaderComponent', () => {
  let component: TodoProjectHeaderComponent;
  let fixture: ComponentFixture<TodoProjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoProjectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
