import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Media {
  src: string;
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
export class MediaCapturedComponent {

  private media: Media = {
    src: '',
    type: ''
  }

  private mediaCapturedIsvisible = false;

  @Output() descardMediaEvent = new EventEmitter();

  @Input() set componentIsVisible(isVisible: boolean) {
    this.mediaCapturedIsvisible = isVisible
  }

  get componentIsVisible() {
    return this.mediaCapturedIsvisible;
  }

  get getMedia() {
    return this.media;
  }

  @Input() set setMedia(media: Media) {

    const supportedTypes = ['image', 'video'];

    if (!supportedTypes.includes(media.type)) throw new Error('Tipo de mídia não suportada');
    if (media.src.length == 0) throw new Error('O atributo src é inválido');

    this.media = media;
  }

  descartarMedia() {
    this.descardMediaEvent.emit();
  }

}
