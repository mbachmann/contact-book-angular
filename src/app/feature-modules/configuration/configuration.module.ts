import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ]
})
export class ConfigurationModule { }
