import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerUploadDocumentsComponent } from './wholesaler-upload-documents.component';

describe('WholesalerUploadDocumentsComponent', () => {
  let component: WholesalerUploadDocumentsComponent;
  let fixture: ComponentFixture<WholesalerUploadDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerUploadDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerUploadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
