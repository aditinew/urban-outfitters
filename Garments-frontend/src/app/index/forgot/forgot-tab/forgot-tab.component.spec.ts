import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotTAbComponent } from './forgot-tab.component';

describe('ForgotTAbComponent', () => {
  let component: ForgotTAbComponent;
  let fixture: ComponentFixture<ForgotTAbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotTAbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotTAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
