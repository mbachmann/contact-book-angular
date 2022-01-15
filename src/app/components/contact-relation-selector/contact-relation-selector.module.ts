import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {FormsModule} from "@angular/forms";
import {ContactRelationSelectorComponent} from "./contact-relation-selector.component";



@NgModule({
  declarations: [
      ContactRelationSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [
    ContactRelationSelectorComponent
  ],
})
export class ContactRelationSelectorModule { }
