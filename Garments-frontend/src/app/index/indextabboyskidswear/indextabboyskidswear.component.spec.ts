import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextabboyskidswearComponent } from './indextabboyskidswear.component';

describe('IndextabboyskidswearComponent', () => {
  let component: IndextabboyskidswearComponent;
  let fixture: ComponentFixture<IndextabboyskidswearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextabboyskidswearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextabboyskidswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
