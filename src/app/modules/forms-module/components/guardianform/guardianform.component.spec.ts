import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianformComponent } from './guardianform.component';

describe('GuardianformComponent', () => {
  let component: GuardianformComponent;
  let fixture: ComponentFixture<GuardianformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
