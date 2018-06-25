import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrequestComponent } from './getrequest.component';

describe('GetrequestComponent', () => {
  let component: GetrequestComponent;
  let fixture: ComponentFixture<GetrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
