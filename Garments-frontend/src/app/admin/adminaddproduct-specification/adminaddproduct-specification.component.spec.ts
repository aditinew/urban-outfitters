import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddproductSpecificationComponent } from './adminaddproduct-specification.component';

describe('AdminaddproductSpecificationComponent', () => {
  let component: AdminaddproductSpecificationComponent;
  let fixture: ComponentFixture<AdminaddproductSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddproductSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddproductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
