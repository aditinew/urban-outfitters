import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexsidebarComponent } from './indexsidebar.component';

describe('IndexsidebarComponent', () => {
  let component: IndexsidebarComponent;
  let fixture: ComponentFixture<IndexsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
