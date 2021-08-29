import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiModule, BASE_PATH} from "./openapi/openapi-gen";
import {environment} from "../environments/environment";
import {ImageCropperModule} from "ngx-image-cropper";
import { PhoneBookListComponent } from './components/phone-book-list/phone-book-list.component';
import { PhoneBookDetailComponent } from './components/phone-book-detail/phone-book-detail.component';
import {AvatarModule} from "ngx-avatar";
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import {FormsModule} from "@angular/forms";

const avatarColors = ["#FFB6C1", "#2c3e50", "#95a5a6", "#cba973", "#1abc9c"];

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookListComponent,
    PhoneBookDetailComponent,
    ImageCropperComponent
  ],
    imports: [
        BrowserModule,
        ImageCropperModule,
        AppRoutingModule,
        HttpClientModule,
        ApiModule,
        AvatarModule.forRoot({
            colors: avatarColors
        }),
        FormsModule
    ],
  providers: [
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
