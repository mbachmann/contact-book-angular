import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageLoadProcessComponent} from './image-load-process.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {BrowserModule, HammerModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {DropZoneComponent} from "../drop-zone/drop-zone.component";


describe('ImageCropperComponent', () => {
  let component: ImageLoadProcessComponent;
  let fixture: ComponentFixture<ImageLoadProcessComponent>;

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
      declarations: [ImageLoadProcessComponent, DropZoneComponent],
    }).compileComponents();

  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ImageLoadProcessComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
