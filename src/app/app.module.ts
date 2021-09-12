import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from './openapi/openapi-gen';
import { environment } from '../environments/environment';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ContactListPageComponent } from './components/contact-list/contact-list-page.component';
import { ContactDetailPageComponent } from './components/contact-detail/contact-detail-page.component';
import { AvatarModule } from 'ngx-avatar';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";

const avatarColors = ['#FFB6C1', '#2c3e50', '#95a5a6', '#cba973', '#1abc9c'];

@NgModule({
  declarations: [AppComponent, ContactListPageComponent, ContactDetailPageComponent, ImageCropperComponent],
  imports: [
    HammerModule,
    BrowserModule,
    CommonModule,
    ImageCropperModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    AvatarModule.forRoot({
      colors: avatarColors,
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent],
})
export class AppModule {}
