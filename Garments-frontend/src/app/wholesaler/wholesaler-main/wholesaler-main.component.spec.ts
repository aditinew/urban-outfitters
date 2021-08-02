import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerMainComponent } from './wholesaler-main.component';

describe('WholesalerMainComponent', () => {
  let component: WholesalerMainComponent;
  let fixture: ComponentFixture<WholesalerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
