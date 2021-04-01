import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CaptureScreenComponent } from "../capture-screen/capture-screen.component";
import { ToggleVideoControlsComponent } from "../toggle-video-controls/toggle-video-controls.component";
import { VideoControlsComponent } from "../video-controls/video-controls.component";

import { VideoComponent } from "./video.component";

@NgModule({
    declarations: [
        VideoComponent,
        VideoControlsComponent,
        CaptureScreenComponent,
        ToggleVideoControlsComponent
    ],
    exports: [VideoComponent],
    imports: [CommonModule]
})
export class VideoModule { }