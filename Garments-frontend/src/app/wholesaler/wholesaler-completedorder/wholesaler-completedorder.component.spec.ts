import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerCompletedorderComponent } from './wholesaler-completedorder.component';

describe('WholesalerCompletedorderComponent', () => {
  let component: WholesalerCompletedorderComponent;
  let fixture: ComponentFixture<WholesalerCompletedorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerCompletedorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerCompletedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
