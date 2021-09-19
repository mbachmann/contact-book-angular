import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {Dimensions, ImageCroppedEvent, ImageTransform} from 'ngx-image-cropper';
import {activateTooltip, isValidImageType} from "../../shared/utils";
import {ToastrService} from "ngx-toastr";
import {ModalChild} from "../modal/modal-child";

@Component({
  selector: 'app-load-process-image',
  templateUrl: './image-load-process.component.html',
  styleUrls: ['./image-load-process.component.scss'],
})
export class ImageLoadProcessComponent implements OnInit, ModalChild {

  imageFile: any = undefined;
  imageChangedEvent: any = '';
  imageBase64: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  imageCropperHidden = false;

  constructor(private toastr: ToastrService) {

  }

  ngOnInit(): void {
   // activateTooltip();
  }

  public setData(imageBase64: string): void {
    this.imageCropperHidden = true;
    this.imageBase64 = imageBase64;
    setTimeout(() => activateTooltip(), 1500);
  }

  public getData() {
    return this.croppedImage;
  }



  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    if (event.base64 != null) {
      // console.log(event, base64ToFile(event.base64));
    }
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH,
    };
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH,
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV,
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation,
    };
  }

  fileSelected($event: FileList) {
    let file: File | null = $event.item(0);
    if (file !== null && isValidImageType(file.type)) {
      this.imageFile = file;
      this.imageCropperHidden = true;
      setTimeout(() => activateTooltip(), 500);
    } else {
      console.log('need to be image');
      this.toastr.error('Please use a jpg or png image!', 'error loading image');
    }
  }


  toogleImageCropper() {
    this.imageCropperHidden = !this.imageCropperHidden;
  }

}
