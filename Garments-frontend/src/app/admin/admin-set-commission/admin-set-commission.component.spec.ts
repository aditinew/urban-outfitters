import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetCommissionComponent } from './admin-set-commission.component';

describe('AdminSetCommissionComponent', () => {
  let component: AdminSetCommissionComponent;
  let fixture: ComponentFixture<AdminSetCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSetCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSetCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
