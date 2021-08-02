import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexproductvarietydatailComponent } from './indexproductvarietydatail.component';

describe('IndexproductvarietydatailComponent', () => {
  let component: IndexproductvarietydatailComponent;
  let fixture: ComponentFixture<IndexproductvarietydatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexproductvarietydatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexproductvarietydatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
