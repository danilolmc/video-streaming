import { Component, OnInit } from '@angular/core';
import { ControlsStatus } from './interfaces/ControlStatus';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  styleUrls: ['./video-controls.component.scss']
})
export class VideoControlsComponent {

  controlStatus: ControlsStatus = {
    callIsActive: false,
    microfoneIsMuted: false,
    videoIsActive: false
  };

  toggleVideoStatus() {

    const newVideoStatus = !this.controlStatus.videoIsActive;

    this.controlStatus = { ...this.controlStatus, videoIsActive: newVideoStatus };

  }

  toggleMicrophoneStatus() {

    const newMicrophoneStatus = !this.controlStatus.microfoneIsMuted;

    this.controlStatus = { ...this.controlStatus, microfoneIsMuted: newMicrophoneStatus };

  }

  toggleCallingStatus() {

    const newCallingStatus = !this.controlStatus.callIsActive;

    this.controlStatus = { ...this.controlStatus, callIsActive: newCallingStatus };

  }

}
