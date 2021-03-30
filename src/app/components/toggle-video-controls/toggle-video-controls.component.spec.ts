import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleVideoControlsComponent } from './toggle-video-controls.component';

describe('ToggleVideoControlsComponent', () => {
  let component: ToggleVideoControlsComponent;
  let fixture: ComponentFixture<ToggleVideoControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleVideoControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleVideoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
