import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneComponent} from "./drop-zone.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HammerModule} from "@angular/platform-browser";
import {DndModule} from "../../shared/dnd/dnd.module";


@NgModule({
    declarations: [
        DropZoneComponent
    ],
    imports: [
        CommonModule,
        DndModule
    ],
    exports: [
        DropZoneComponent
    ]

})
export class DropZoneModule {
}
