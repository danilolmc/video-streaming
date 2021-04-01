import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlsStatus } from './interfaces/ControlStatus';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  styleUrls: ['./video-controls.component.scss']
})
export class VideoControlsComponent {

  controlStatus: ControlsStatus = {
    callIsActive: true,
    microfoneIsMuted: false,
    videoIsActive: true
  };


  @Output() statusVideoCall = new EventEmitter<ControlsStatus>();

  toggleVideoStatus() {

    const newVideoStatus = !this.controlStatus.videoIsActive;

    this.controlStatus = { ...this.controlStatus, videoIsActive: newVideoStatus };

    this.statusVideoCall.emit(this.controlStatus);
  }

  toggleMicrophoneStatus() {

    const newMicrophoneStatus = !this.controlStatus.microfoneIsMuted;

    this.controlStatus = { ...this.controlStatus, microfoneIsMuted: newMicrophoneStatus };

    this.statusVideoCall.emit(this.controlStatus);
  }

  toggleCallingStatus() {

    const newCallingStatus = !this.controlStatus.callIsActive;

    this.controlStatus = { ...this.controlStatus, callIsActive: newCallingStatus };

    this.statusVideoCall.emit(this.controlStatus);
  }

}
