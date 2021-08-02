import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerforgotComponent } from './sellerforgot.component';

describe('SellerforgotComponent', () => {
  let component: SellerforgotComponent;
  let fixture: ComponentFixture<SellerforgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerforgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
