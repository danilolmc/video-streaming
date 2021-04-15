import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ControlsStatus } from '../video-controls/interfaces/ControlStatus';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
    trigger('videoControlsAnimation', [
      state('isVisible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('isHidden', style({
        opacity: 0,
        transform: 'translateY(150%)'
      })),
      transition('* => *', [
        animate('.5s ease')
      ])
    ])
  ]
})
export class VideoComponent implements OnInit {

  userMedia = {} as MediaStream;

  videoConstraints = {
    audio: true,
    video: true
  }

  videoControlsIsVisible = true;

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  capturedMedia = new BehaviorSubject({
    src: 'img.png', type: 'image'
  });

  mediaCaptureisVisible = false;

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

  screenShot() {

    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', '1440px');
    canvas.setAttribute('height', '900px');

    const context = canvas.getContext('2d');

    if (this.userMedia) {

      context.drawImage(this.video.nativeElement, -170, -200, 1800, 1300);

      const imageData = { src: canvas.toDataURL('image/png'), type: 'image' };

      this.capturedMedia.next(imageData);
    }

    this.mediaCaptureisVisible = true;
  }

  toggleVideoControls() {
    this.videoControlsIsVisible = !this.videoControlsIsVisible;
  }

  resetMediaComponent() {
    this.mediaCaptureisVisible = false;
  }

}
