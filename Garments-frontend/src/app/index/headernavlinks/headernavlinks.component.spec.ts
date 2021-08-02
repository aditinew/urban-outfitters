import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavlinksComponent } from './headernavlinks.component';

describe('HeadernavlinksComponent', () => {
  let component: HeadernavlinksComponent;
  let fixture: ComponentFixture<HeadernavlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernavlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernavlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
