import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'src/app/components/progress-bar/progress-bar.module';
import { VideoModule } from 'src/app/components/video/video.module';
import { HomePage } from './home.page';
import { HomePageRountingModule } from './home.routing.module';


@NgModule({
  declarations: [
    HomePage,

  ],
  imports: [
    CommonModule,
    HomePageRountingModule,
    ProgressBarModule,
    VideoModule,
  ],
})
export class HomePageModule { }
