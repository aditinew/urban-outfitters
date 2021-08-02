import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcheckoutComponent } from './indexcheckout.component';

describe('IndexcheckoutComponent', () => {
  let component: IndexcheckoutComponent;
  let fixture: ComponentFixture<IndexcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
