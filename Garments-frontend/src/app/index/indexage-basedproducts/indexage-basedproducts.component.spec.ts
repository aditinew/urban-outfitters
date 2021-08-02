import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexageBasedproductsComponent } from './indexage-basedproducts.component';

describe('IndexageBasedproductsComponent', () => {
  let component: IndexageBasedproductsComponent;
  let fixture: ComponentFixture<IndexageBasedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexageBasedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexageBasedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
