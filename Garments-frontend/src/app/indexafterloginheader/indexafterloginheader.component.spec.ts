import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexafterloginheaderComponent } from './indexafterloginheader.component';

describe('IndexafterloginheaderComponent', () => {
  let component: IndexafterloginheaderComponent;
  let fixture: ComponentFixture<IndexafterloginheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexafterloginheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexafterloginheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
