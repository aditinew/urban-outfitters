import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryViewComponent } from './admin-category-view.component';

describe('AdminCategoryViewComponent', () => {
  let component: AdminCategoryViewComponent;
  let fixture: ComponentFixture<AdminCategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
