import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageorderstatusComponent } from './manageorderstatus.component';

describe('ManageorderstatusComponent', () => {
  let component: ManageorderstatusComponent;
  let fixture: ComponentFixture<ManageorderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageorderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageorderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
