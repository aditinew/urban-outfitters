import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerforgotComponent } from './wholesalerforgot.component';

describe('WholesalerforgotComponent', () => {
  let component: WholesalerforgotComponent;
  let fixture: ComponentFixture<WholesalerforgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerforgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerforgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
