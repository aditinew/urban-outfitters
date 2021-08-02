import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexlatesttrendsComponent } from './indexlatesttrends.component';

describe('IndexlatesttrendsComponent', () => {
  let component: IndexlatesttrendsComponent;
  let fixture: ComponentFixture<IndexlatesttrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexlatesttrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexlatesttrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
