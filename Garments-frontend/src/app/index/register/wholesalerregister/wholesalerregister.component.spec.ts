import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerregisterComponent } from './wholesalerregister.component';

describe('WholesalerregisterComponent', () => {
  let component: WholesalerregisterComponent;
  let fixture: ComponentFixture<WholesalerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
