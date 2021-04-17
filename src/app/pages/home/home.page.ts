import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('videoLoadedAnimation', [
      state('loaded', style({
        opacity: 0,
        display: 'none'
      })),
      state('notLoaded', style({
        opacity: 1,
      })),
      transition('* => *', [
        animate('.2s ease-in-out')
      ])
    ])
  ]
})
export class HomePage {

  pageLoaded = false;


  loadVideo() {
    this.pageLoaded = true;
  }
}