import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerorderviewComponent } from './wholesalerorderview.component';

describe('WholesalerorderviewComponent', () => {
  let component: WholesalerorderviewComponent;
  let fixture: ComponentFixture<WholesalerorderviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerorderviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerorderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
