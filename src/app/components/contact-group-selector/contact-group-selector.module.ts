import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {HammerModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContactGroupSelectorComponent} from "./contact-group-selector.component";



@NgModule({
  declarations: [
      ContactGroupSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [
    ContactGroupSelectorComponent
  ]
})
export class ContactGroupSelectorModule { }
