import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaptureScreenComponent } from 'src/app/components/capture-screen/capture-screen.component';
import { ProgressBarModule } from 'src/app/components/progress-bar/progress-bar.module';
import { ToggleVideoControlsComponent } from 'src/app/components/toggle-video-controls/toggle-video-controls.component';
import { VideoControlsComponent } from 'src/app/components/video-controls/video-controls.component';
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
    VideoModule
  ],
})
export class HomePageModule { }
