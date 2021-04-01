import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VideoControlsComponent } from './video-controls.component';


describe('VideoControlsComponent', () => {
  let component: VideoControlsComponent;
  let fixture: ComponentFixture<VideoControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoControlsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.controlStatus).toBeDefined();
    expect(component).toBeTruthy();
  });

  describe('video status toggle', () => {

    it('should switch camera open status to false', () => {

      component.controlStatus.videoIsActive = true;

      fixture.detectChanges();

      const cameraButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-video'))
        .nativeElement;

      const spyToggleVideoFunciton = jest.spyOn(component, 'toggleVideoStatus');
      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      cameraButton.click();

      const videoStatusIsVisible = component.controlStatus.videoIsActive;

      expect(spyToggleVideoFunciton).toBeCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(videoStatusIsVisible).toBeFalsy()


    })


    it('should switch camera open status to true', () => {

      component.controlStatus.videoIsActive = false;

      const cameraButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-video'))
        .nativeElement;

      const spyToggleVideoFunction = jest.spyOn(component, 'toggleVideoStatus');

      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      cameraButton.click();

      const videoStatusIsActive = component.controlStatus.videoIsActive;

      expect(spyToggleVideoFunction).toBeCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(videoStatusIsActive).toBeTruthy()

    })
  })


  describe('should toggle calling', () => {

    it('should switch button calling status from true to false', () => {

      component.controlStatus.callIsActive = true;

      const callingButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-call'))
        .nativeElement;

      const spyToggleCallingFunction = jest.spyOn(component, 'toggleCallingStatus');

      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      callingButton.click();

      const callingStatusIsActive = component.controlStatus.callIsActive;

      expect(spyToggleCallingFunction).toHaveBeenCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(callingStatusIsActive).toBeFalsy();

    })

    it('should switch button calling status from false to true', () => {

      component.controlStatus.callIsActive = false;

      const callingButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-call'))
        .nativeElement;

      const spyToggleCallingFunction = jest.spyOn(component, 'toggleCallingStatus');
      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      callingButton.click();

      const callingStatusIsActive = component.controlStatus.callIsActive;

      expect(spyToggleCallingFunction).toHaveBeenCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(callingStatusIsActive).toBeTruthy();

    })
  })

  describe('microphone status toggle', () => {

    it('should switch microphone mute status to true', () => {

      component.controlStatus.microfoneIsMuted = false;

      const microphoneButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-microphone'))
        .nativeElement;

      const spyToggleMicrophoneFunction = jest.spyOn(component, 'toggleMicrophoneStatus');
      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      microphoneButton.click();

      const microphoneStatusIsActive = component.controlStatus.microfoneIsMuted;

      expect(spyToggleMicrophoneFunction).toHaveBeenCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(microphoneStatusIsActive).toBeTruthy();

    });


    it('should switch microphone mute status to false', () => {

      component.controlStatus.microfoneIsMuted = true;

      const microphoneButton: HTMLButtonElement = fixture
        .debugElement
        .query(By.css('.btn-microphone'))
        .nativeElement;

      const spyToggleMicrophoneFunction = jest.spyOn(component, 'toggleMicrophoneStatus');

      const spyEmmiter = jest.spyOn(component.statusVideoCall, 'emit');

      microphoneButton.click();

      const microphoneStatusIsActive = component.controlStatus.microfoneIsMuted;

      expect(spyToggleMicrophoneFunction).toHaveBeenCalledTimes(1);
      expect(spyEmmiter).toBeCalledTimes(1);
      expect(microphoneStatusIsActive).toBeFalsy();

    })
  })
});
