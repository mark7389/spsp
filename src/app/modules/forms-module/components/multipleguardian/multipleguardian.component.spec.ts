import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleguardianComponent } from './multipleguardian.component';

describe('MultipleguardianComponent', () => {
  let component: MultipleguardianComponent;
  let fixture: ComponentFixture<MultipleguardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleguardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleguardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
