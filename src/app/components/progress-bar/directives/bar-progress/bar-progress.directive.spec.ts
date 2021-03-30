import { Component } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BehaviorSubject, of } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { BarProgressDirective } from "./bar-progress.directive";

@Component({
  template: `<div class="progress-bar">
                <span
                  appBarProgress
                  [barProgressPercentage]="barProgressPercentage | async"
                  class="bar-progress">
                </span>
            </div>`
})
class BarProgressComponentMock {
  barProgressPercentage = new BehaviorSubject(0);
}


describe('BarProgressDirective', () => {

  let component: BarProgressComponentMock;
  let fixture: ComponentFixture<BarProgressComponentMock>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarProgressComponentMock, BarProgressDirective]
    })

    fixture = TestBed.createComponent(BarProgressComponentMock);
    component = fixture.componentInstance;
  })

  it('should create an instance', () => {
    const directive = new BarProgressDirective();
    expect(directive).toBeTruthy();
  });

  test('should have width 100% when progress bar is complete', () => {

    let progressBarElement: HTMLSpanElement =
      fixture.debugElement
        .query(By.directive(BarProgressDirective))
        .nativeElement;

    component.barProgressPercentage.next(100);

    fixture.detectChanges();

    expect(progressBarElement.style.width).toBe('100%');
  })


  test("should throw error when percentage it's less than 0", () => {

    const directive = new BarProgressDirective();

    directive.barProgressPercentage = -5;

    fixture.detectChanges();

    expect(() => directive.ngOnChanges()).toThrow();

  })


  test("should throw error when percentage it's greater than 100", () => {

    const directive = new BarProgressDirective();

    directive.barProgressPercentage = 120;

    fixture.detectChanges();

    expect(() => directive.ngOnChanges()).toThrow();

  })

});
