import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDiscountCodeComponent } from './admin-add-discount-code.component';

describe('AdminAddDiscountCodeComponent', () => {
  let component: AdminAddDiscountCodeComponent;
  let fixture: ComponentFixture<AdminAddDiscountCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddDiscountCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDiscountCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
