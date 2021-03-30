import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureScreenComponent } from './capture-screen.component';

describe('CaptureScreenComponent', () => {
  let component: CaptureScreenComponent;
  let fixture: ComponentFixture<CaptureScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
