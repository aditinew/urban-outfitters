import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerifyDocumentComponent } from './admin-verify-document.component';

describe('AdminVerifyDocumentComponent', () => {
  let component: AdminVerifyDocumentComponent;
  let fixture: ComponentFixture<AdminVerifyDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerifyDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerifyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
