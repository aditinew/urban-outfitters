import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexproductdetailsComponent } from './indexproductdetails.component';

describe('IndexproductdetailsComponent', () => {
  let component: IndexproductdetailsComponent;
  let fixture: ComponentFixture<IndexproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
