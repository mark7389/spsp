import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAssignComponent } from './class-assign.component';

describe('ClassAssignComponent', () => {
  let component: ClassAssignComponent;
  let fixture: ComponentFixture<ClassAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
