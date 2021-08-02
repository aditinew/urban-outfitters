import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerFooterComponent } from './wholesaler-footer.component';

describe('WholesalerFooterComponent', () => {
  let component: WholesalerFooterComponent;
  let fixture: ComponentFixture<WholesalerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
