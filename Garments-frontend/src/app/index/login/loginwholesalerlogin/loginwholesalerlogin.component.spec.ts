import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwholesalerloginComponent } from './loginwholesalerlogin.component';

describe('LoginwholesalerloginComponent', () => {
  let component: LoginwholesalerloginComponent;
  let fixture: ComponentFixture<LoginwholesalerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginwholesalerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwholesalerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
