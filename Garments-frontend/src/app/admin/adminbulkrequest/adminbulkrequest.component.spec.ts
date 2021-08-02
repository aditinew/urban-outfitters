import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbulkrequestComponent } from './adminbulkrequest.component';

describe('AdminbulkrequestComponent', () => {
  let component: AdminbulkrequestComponent;
  let fixture: ComponentFixture<AdminbulkrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbulkrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbulkrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
