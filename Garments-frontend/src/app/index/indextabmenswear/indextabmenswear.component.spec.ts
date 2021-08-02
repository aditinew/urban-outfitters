import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextabmenswearComponent } from './indextabmenswear.component';

describe('IndextabmenswearComponent', () => {
  let component: IndextabmenswearComponent;
  let fixture: ComponentFixture<IndextabmenswearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextabmenswearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextabmenswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
