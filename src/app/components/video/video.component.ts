import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlsStatus } from '../video-controls/interfaces/ControlStatus';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  userMedia = {} as MediaStream;

  videoConstraints = {
    audio: true,
    video: true
  }

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  ngOnInit() {

    this.getCameraVideo();
  }

  changeStreamStatus(controlStatus: ControlsStatus) {
    this.userMedia.getAudioTracks()[0].enabled = !controlStatus.microfoneIsMuted;
    this.userMedia.getVideoTracks()[0].enabled = controlStatus.videoIsActive;
  }

  async getCameraVideo() {

    this.userMedia = await navigator.mediaDevices.getUserMedia(this.videoConstraints);

    this.video.nativeElement.srcObject = this.userMedia;

    this.video.nativeElement.onloadedmetadata = () => {
      this.video.nativeElement.play();
    }
  }
}
