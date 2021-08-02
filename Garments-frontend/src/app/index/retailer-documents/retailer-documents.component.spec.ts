import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDocumentsComponent } from './retailer-documents.component';

describe('RetailerDocumentsComponent', () => {
  let component: RetailerDocumentsComponent;
  let fixture: ComponentFixture<RetailerDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
