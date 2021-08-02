import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageDiscountCodeComponent } from './admin-manage-discount-code.component';

describe('AdminManageDiscountCodeComponent', () => {
  let component: AdminManageDiscountCodeComponent;
  let fixture: ComponentFixture<AdminManageDiscountCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageDiscountCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageDiscountCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
