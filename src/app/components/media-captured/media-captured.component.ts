import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

interface Media {
  src: SafeUrl;
  type: string;
}

@Component({
  selector: 'app-media-captured',
  templateUrl: './media-captured.component.html',
  styleUrls: ['./media-captured.component.scss'],
  animations: [
    trigger('mediaContentAnimation', [
      state('photoWasTaken', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('photoWasNotTaken', style({
        opacity: 0,
        transform: 'translateX(-150%)'
      })),
      transition('* => *', [
        animate('.5s ease')
      ])
    ])
  ]
})
export class MediaCapturedComponent implements OnChanges {

  private supportedTypes = ['image', 'video'];

  fileName = '';

  private media: Media = {
    src: '',
    type: ''
  }

  ngOnChanges() {

    const fileName = {
      image: 'screenshot.png',
      video: 'video-recording.webm'
    }

    this.media = this.media;
    this.fileName = fileName[this.media.type];
  }

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;

  @Output() descardMediaEvent = new EventEmitter();

  @Input() componentIsVisible = false;


  get getMedia() {
    return this.media;
  }

  @Input() set setMedia(media: Media) {

    if (!this.supportedTypes.includes(media.type)) throw new Error('Tipo de mídia não suportada');
    if (!media.src) throw new Error('O atributo src é inválido');

    this.media = media
  }

  descartarMedia() {
    this.media.src = ''
    this.descardMediaEvent.emit();
  }

}
