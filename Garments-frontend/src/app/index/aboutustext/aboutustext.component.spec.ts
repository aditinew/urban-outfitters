import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutustextComponent } from './aboutustext.component';

describe('AboutustextComponent', () => {
  let component: AboutustextComponent;
  let fixture: ComponentFixture<AboutustextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutustextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutustextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
