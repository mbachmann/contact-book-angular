import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageCropperComponent} from './image-cropper.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {BrowserModule, HammerModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


describe('ImageCropperComponent', () => {
  let component: ImageCropperComponent;
  let fixture: ComponentFixture<ImageCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HammerModule,
        BrowserModule,
        ImageCropperModule,
        FormsModule,
      ],
      declarations: [ImageCropperComponent],
    }).compileComponents();

  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ImageCropperComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
