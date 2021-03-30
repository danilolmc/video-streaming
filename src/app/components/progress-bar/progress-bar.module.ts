import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BarProgressDirective } from "./directives/bar-progress/bar-progress.directive";
import { ProgressBarComponent } from "./progress-bar.component";

@NgModule({
    declarations: [ProgressBarComponent, BarProgressDirective],
    exports: [ProgressBarComponent],
    imports: [CommonModule]
})
export class ProgressBarModule { }