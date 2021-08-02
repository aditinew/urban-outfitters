import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageBrandComponent } from './admin-manage-brand.component';

describe('AdminManageBrandComponent', () => {
  let component: AdminManageBrandComponent;
  let fixture: ComponentFixture<AdminManageBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
