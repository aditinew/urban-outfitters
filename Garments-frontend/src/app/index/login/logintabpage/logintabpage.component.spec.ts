import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintabpageComponent } from './logintabpage.component';

describe('LogintabpageComponent', () => {
  let component: LogintabpageComponent;
  let fixture: ComponentFixture<LogintabpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintabpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintabpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
