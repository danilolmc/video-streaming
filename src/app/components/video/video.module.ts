import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VideoControlsComponent } from "../video-controls/video-controls.component";
import { VideoComponent } from "./video.component";

@NgModule({
    declarations: [VideoComponent],
    exports: [VideoComponent],
    imports: [CommonModule]
})
export class VideoModule { }