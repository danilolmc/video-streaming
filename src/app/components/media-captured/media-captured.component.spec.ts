import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
