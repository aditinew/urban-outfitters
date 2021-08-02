import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBrandComponent } from './admin-add-brand.component';

describe('AdminAddBrandComponent', () => {
  let component: AdminAddBrandComponent;
  let fixture: ComponentFixture<AdminAddBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
