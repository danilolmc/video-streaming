import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBarProgress]'
})
export class BarProgressDirective implements OnChanges {

  @Input() barProgressPercentage = 0;

  @HostBinding('style.width') elementProgressWidth = "0%";

  ngOnChanges() {

    if (
      this.barProgressPercentage > 100 ||
      this.barProgressPercentage < 0
    )
      throw Error("Progress bar percentage should be between 0 and 100");


    this.elementProgressWidth = this.barProgressPercentage > 100
      ? '100%'
      : `${this.barProgressPercentage}%`;

  }

}
