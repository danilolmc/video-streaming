import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { first, take, tap } from "rxjs/operators";
@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent implements OnInit {
  barProgressPercentage = new BehaviorSubject(0);

  @Output() barProgressCompleted = new EventEmitter(false);

  ngOnInit() {

    // Simulando carregamento da barra de progresso

    const interval = setInterval(() => {

      this.barProgressPercentage.value < 100
        && this.barProgressPercentage.next(this.barProgressPercentage.value + 25);

    }, 1000)

    this.barProgressCompleted
      .pipe(
        first(isCompleted => isCompleted),
        tap((v) => { clearInterval(interval) }))
      .subscribe();

    this.emitWhenProgressBarComplete();

  }

  emitWhenProgressBarComplete() {

    this.barProgressPercentage
      .pipe(first(value => value == 100))
      .subscribe(() => {
        this.barProgressCompleted.emit(true);
      })

  }


}
