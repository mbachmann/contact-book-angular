import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from './openapi/openapi-gen';
import { environment } from '../environments/environment';
import { ContactListPageComponent } from './pages/contact-list/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail/contact-detail-page.component';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { ProgressModule } from "./components/progress/progress.module";
import { ListBarModule } from "./components/list-bar/list-bar.module";
import { ModalModule } from "./components/modal/modal.module";
import { ImageLoadProcessModule } from "./components/image-load-process/image-load-process.module";
import { DropZoneModule } from "./components/drop-zone/drop-zone.module";
import { TooltipModule } from "./shared/tooltip/tooltip.module";
import { ContactRelationSelectorModule } from "./components/contact-relation-selector/contact-relation-selector.module";
import { ContactGroupSelectorModule } from "./components/contact-group-selector/contact-group-selector.module";

defineLocale('de', deLocale);

const avatarColors = ['#FFB6C1', '#2c3e50', '#95a5a6', '#cba973', '#1abc9c'];

@NgModule({
    declarations: [
        AppComponent,
        ContactListPageComponent,
        ContactDetailPageComponent,
    ],
    imports: [
        AppRoutingModule,
        HammerModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        ApiModule,
        AvatarModule.forRoot({
            colors: avatarColors,
        }),
        BsDatepickerModule.forRoot(),
        ContactRelationSelectorModule,
        ContactGroupSelectorModule,
        DropZoneModule,
        ModalModule,
        ImageLoadProcessModule,

        ProgressModule,
        ListBarModule,

        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        TooltipModule,

    ],
    providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}],
    bootstrap: [AppComponent],

    exports: [
    ]
})
export class AppModule {}
