import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MediaCapturedComponent } from "../media-captured/media-captured.component";
import { VideoControlsComponent } from "../video-controls/video-controls.component";
import { VideoComponent } from "./video.component";

@NgModule({
    declarations: [
        VideoComponent,
        VideoControlsComponent,
        MediaCapturedComponent
    ],
    exports: [VideoComponent],
    imports: [CommonModule]
})
export class VideoModule { }