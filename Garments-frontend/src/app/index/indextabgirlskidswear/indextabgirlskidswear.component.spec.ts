import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextabgirlskidswearComponent } from './indextabgirlskidswear.component';

describe('IndextabgirlskidswearComponent', () => {
  let component: IndextabgirlskidswearComponent;
  let fixture: ComponentFixture<IndextabgirlskidswearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextabgirlskidswearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextabgirlskidswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
