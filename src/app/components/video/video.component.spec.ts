import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video.component';



describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [BrowserAnimationsModule],
      providers: [DomSanitizer]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should audio and video constraints to be true', () => {

    const expectedVideoConstraints = { audio: true, video: true };

    expect(component.videoConstraints).toStrictEqual(expectedVideoConstraints);

  })

  it('should hide video controls', () => {
    component.videoControlsIsVisible = true;

    const toggleVideoControlsButton: HTMLButtonElement = fixture.debugElement
      .query(By.css('.btntoggleControls'))
      .nativeElement

    const spyToggleControlFn = jest.spyOn(component, 'toggleVideoControls');

    toggleVideoControlsButton.click();

    expect(spyToggleControlFn).toBeCalledTimes(1);
    expect(component.videoControlsIsVisible).toBeFalsy();
  })

  it('should show video controls', () => {
    component.videoControlsIsVisible = false;

    const toggleVideoControlsButton: HTMLButtonElement = fixture.debugElement
      .query(By.css('.btntoggleControls'))
      .nativeElement

    const spyToggleControlFn = jest.spyOn(component, 'toggleVideoControls');

    toggleVideoControlsButton.click();

    expect(spyToggleControlFn).toBeCalledTimes(1);
    expect(component.videoControlsIsVisible).toBeTruthy();
  })

});
