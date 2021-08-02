import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRequestComponent } from './sample-request.component';

describe('SampleRequestComponent', () => {
  let component: SampleRequestComponent;
  let fixture: ComponentFixture<SampleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
