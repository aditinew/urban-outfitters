import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMyAccountsComponent } from './index-my-accounts.component';

describe('IndexMyAccountsComponent', () => {
  let component: IndexMyAccountsComponent;
  let fixture: ComponentFixture<IndexMyAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMyAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMyAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
