import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageLoadProcessComponent} from "./image-load-process.component";
import {ImageCropperModule} from "ngx-image-cropper";
import {DropZoneModule} from "../drop-zone/drop-zone.module";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "../../shared/tooltip/tooltip.module";

@NgModule({
    declarations: [
        ImageLoadProcessComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ImageCropperModule,
        DropZoneModule,
        TooltipModule
    ],
    exports: [
        ImageLoadProcessComponent
    ]
})
export class ImageLoadProcessModule {
}
