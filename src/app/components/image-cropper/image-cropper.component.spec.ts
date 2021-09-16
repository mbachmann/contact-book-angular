import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageCropperComponent} from './image-cropper.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {BrowserModule, HammerModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {DropZoneComponent} from "../drop-zone/drop-zone.component";


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
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
      ],
      declarations: [ImageCropperComponent, DropZoneComponent],
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
