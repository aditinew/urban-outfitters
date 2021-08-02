import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerHeaderComponent } from './wholesaler-header.component';

describe('WholesalerHeaderComponent', () => {
  let component: WholesalerHeaderComponent;
  let fixture: ComponentFixture<WholesalerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
