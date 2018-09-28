import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorHomeComponent } from './coor-home.component';

describe('CoorHomeComponent', () => {
  let component: CoorHomeComponent;
  let fixture: ComponentFixture<CoorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
