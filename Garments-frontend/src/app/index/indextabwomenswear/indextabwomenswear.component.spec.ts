import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextabwomenswearComponent } from './indextabwomenswear.component';

describe('IndextabwomenswearComponent', () => {
  let component: IndextabwomenswearComponent;
  let fixture: ComponentFixture<IndextabwomenswearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextabwomenswearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextabwomenswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
