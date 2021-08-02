import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexgoogleiosdescComponent } from './indexgoogleiosdesc.component';

describe('IndexgoogleiosdescComponent', () => {
  let component: IndexgoogleiosdescComponent;
  let fixture: ComponentFixture<IndexgoogleiosdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexgoogleiosdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexgoogleiosdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
