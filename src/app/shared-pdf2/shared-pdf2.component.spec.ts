import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPdf2Component } from './shared-pdf2.component';

describe('SharedPdf2Component', () => {
  let component: SharedPdf2Component;
  let fixture: ComponentFixture<SharedPdf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPdf2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPdf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
