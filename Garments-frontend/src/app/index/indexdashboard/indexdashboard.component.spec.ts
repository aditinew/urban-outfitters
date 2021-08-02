import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdashboardComponent } from './indexdashboard.component';

describe('IndexdashboardComponent', () => {
  let component: IndexdashboardComponent;
  let fixture: ComponentFixture<IndexdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
