import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedclothesComponent } from './listedclothes.component';

describe('ListedclothesComponent', () => {
  let component: ListedclothesComponent;
  let fixture: ComponentFixture<ListedclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
