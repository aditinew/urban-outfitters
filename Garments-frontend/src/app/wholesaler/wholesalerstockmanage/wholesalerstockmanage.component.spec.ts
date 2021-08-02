import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerstockmanageComponent } from './wholesalerstockmanage.component';

describe('WholesalerstockmanageComponent', () => {
  let component: WholesalerstockmanageComponent;
  let fixture: ComponentFixture<WholesalerstockmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerstockmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerstockmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
