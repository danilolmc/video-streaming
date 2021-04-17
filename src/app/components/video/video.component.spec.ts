import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaCapturedComponent } from '../media-captured/media-captured.component';
import { VideoControlsComponent } from '../video-controls/video-controls.component';
import { VideoComponent } from './video.component';



describe.skip('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent, VideoControlsComponent, MediaCapturedComponent],
      imports: [BrowserAnimationsModule],
      providers: [{
        provide: DomSanitizer,
        useValue: { bypassSecurityTrustUrl: () => 'url' }
      }]
    })
      .compileComponents()
      .catch(erro => console.log(erro))
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
    tick();
  }));

  it.skip('should audio and video constraints to be true', () => {

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
