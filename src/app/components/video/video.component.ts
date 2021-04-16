import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { ControlsStatus } from '../video-controls/interfaces/ControlStatus';

declare const MediaRecorder: any;
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

  userMedia = new MediaStream();

  mediaRecorder: any;

  videoConstraints = {
    audio: true,
    video: true
  }

  videoBlob = new Blob();

  videoControlsIsVisible = true;

  videoItsBeenRecorded = false;

  private recordedChuncks: string[] = [];

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;


  capturedMedia = new BehaviorSubject({
    src: this.sanitizer.bypassSecurityTrustUrl('img.png'), type: 'image'
  });


  mediaCaptureisVisible = false;

  ngOnInit() {
    this.setupCameraVideo();
  }

  constructor(private sanitizer: DomSanitizer) { }

  changeStreamStatus(controlStatus: ControlsStatus) {
    this.userMedia.getAudioTracks()[0].enabled = !controlStatus.microfoneIsMuted;
    this.userMedia.getVideoTracks()[0].enabled = controlStatus.videoIsActive;
  }

  async setupCameraVideo() {

    this.userMedia = await navigator.mediaDevices.getUserMedia(this.videoConstraints);

    this.video.nativeElement.srcObject = this.userMedia;

    const options = { mimeType: "video/webm; codecs=vp9" };

    this.mediaRecorder = new MediaRecorder(this.userMedia, options);

    this.mediaRecorder.addEventListener('stop', () => {

      const recording = new Blob(this.recordedChuncks, { type: 'video/webm' });
      this.recordedChuncks = [];

      let video = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(recording));

      this.capturedMedia.next({
        src: video,
        type: 'video'
      })

      this.changeRecordingStatus();
      this.mediaCaptureisVisible = true;

    })

    this.video.nativeElement.onloadedmetadata = () => {
      this.video.nativeElement.play();
    }
  }

  screenRecord() {

    this.changeRecordingStatus();

    this.mediaRecorder.ondataavailable = (event) => {

      if (event.data.size > 0) {

        this.recordedChuncks.push(event.data);
        console.log("gravou")

      }
    }

    this.mediaRecorder.start();

  }

  // renderRecording(blob: Blob) {

  // }

  stopScreenRecord() {

    this.mediaRecorder.stop();

  }


  screenShot() {

    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', '1440px');
    canvas.setAttribute('height', '900px');

    const context = canvas.getContext('2d');

    if (this.userMedia) {

      context.drawImage(this.video.nativeElement, -170, -200, 1800, 1300);

      const imageData = { src: this.sanitizer.bypassSecurityTrustUrl(canvas.toDataURL('image/png')), type: 'image' };

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

  changeRecordingStatus() {
    this.videoItsBeenRecorded = !this.videoItsBeenRecorded;
  }
}
