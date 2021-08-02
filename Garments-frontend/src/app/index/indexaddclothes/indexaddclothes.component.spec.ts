import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexaddclothesComponent } from './indexaddclothes.component';

describe('IndexaddclothesComponent', () => {
  let component: IndexaddclothesComponent;
  let fixture: ComponentFixture<IndexaddclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexaddclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexaddclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
