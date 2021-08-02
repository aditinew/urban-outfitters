import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerdashboardComponent } from './wholesalerdashboard.component';

describe('WholesalerdashboardComponent', () => {
  let component: WholesalerdashboardComponent;
  let fixture: ComponentFixture<WholesalerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
