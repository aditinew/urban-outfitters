import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginretialerloginComponent } from './loginretialerlogin.component';

describe('LoginretialerloginComponent', () => {
  let component: LoginretialerloginComponent;
  let fixture: ComponentFixture<LoginretialerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginretialerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginretialerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
