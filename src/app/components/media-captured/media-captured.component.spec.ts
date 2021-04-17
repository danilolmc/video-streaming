import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaCapturedComponent } from './media-captured.component';


describe('VideoControlsComponent', () => {
  let component: MediaCapturedComponent;
  let fixture: ComponentFixture<MediaCapturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaCapturedComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCapturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should discard captured media', () => {

    const buttonDiscardMedia: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    const spyDiscardFunction = jest.spyOn(component, 'descartarMedia');

    const spyEventEmmiter = jest.spyOn(component.descardMediaEvent, 'emit');

    buttonDiscardMedia.click();

    expect(spyDiscardFunction).toBeCalledTimes(1);

    expect(component.getMedia.src).toBe('');
    expect(spyEventEmmiter).toBeCalledTimes(1);
  })
});
