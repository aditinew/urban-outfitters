import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductSpecificationComponent } from './manage-product-specification.component';

describe('ManageProductSpecificationComponent', () => {
  let component: ManageProductSpecificationComponent;
  let fixture: ComponentFixture<ManageProductSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
