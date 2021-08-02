import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerSidebarComponent } from './wholesaler-sidebar.component';

describe('WholesalerSidebarComponent', () => {
  let component: WholesalerSidebarComponent;
  let fixture: ComponentFixture<WholesalerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
