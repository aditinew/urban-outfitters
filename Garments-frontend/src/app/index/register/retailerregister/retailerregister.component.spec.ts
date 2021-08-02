import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerregisterComponent } from './retailerregister.component';

describe('RetailerregisterComponent', () => {
  let component: RetailerregisterComponent;
  let fixture: ComponentFixture<RetailerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
