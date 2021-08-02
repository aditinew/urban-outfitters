import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddfiltersComponent } from './adminaddfilters.component';

describe('AdminaddfiltersComponent', () => {
  let component: AdminaddfiltersComponent;
  let fixture: ComponentFixture<AdminaddfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
