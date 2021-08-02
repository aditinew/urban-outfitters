import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsampleRequestComponent } from './adminsample-request.component';

describe('AdminsampleRequestComponent', () => {
  let component: AdminsampleRequestComponent;
  let fixture: ComponentFixture<AdminsampleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsampleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsampleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
