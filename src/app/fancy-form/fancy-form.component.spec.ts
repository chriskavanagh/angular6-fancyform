import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyFormComponent } from './fancy-form.component';

describe('FancyFormComponent', () => {
  let component: FancyFormComponent;
  let fixture: ComponentFixture<FancyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
