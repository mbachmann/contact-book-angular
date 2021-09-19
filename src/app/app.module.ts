import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from './openapi/openapi-gen';
import { environment } from '../environments/environment';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ContactListPageComponent } from './pages/contact-list/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail/contact-detail-page.component';
import { AvatarModule } from 'ngx-avatar';
import { ImageLoadProcessComponent } from './components/image-load-process/image-load-process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { DndDirective } from './shared/dnd.directive';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from './components/modal/modal.component';
import { TooltipDirective } from './shared/tooltip.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { ContactGroupSelectorComponent } from './components/contact-group-selector/contact-group-selector.component';
import { ContactRelationSelectorComponent } from './components/contact-relation-selector/contact-relation-selector.component';

defineLocale('de', deLocale);

const avatarColors = ['#FFB6C1', '#2c3e50', '#95a5a6', '#cba973', '#1abc9c'];

@NgModule({
  declarations: [
    AppComponent,
    ContactListPageComponent,
    ContactDetailPageComponent,
    ImageLoadProcessComponent,
    DndDirective,
    DropZoneComponent,
    ProgressComponent,
    ModalComponent,
    TooltipDirective,
    ContactGroupSelectorComponent,
    ContactRelationSelectorComponent,
  ],
  imports: [
    AppRoutingModule,
    HammerModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    HttpClientModule,
    ApiModule,
    AvatarModule.forRoot({
      colors: avatarColors,
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent],
})
export class AppModule {}
