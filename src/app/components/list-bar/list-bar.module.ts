import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListBarComponent} from "./list-bar.component";



@NgModule({
  declarations: [
      ListBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListBarComponent,
  ]
})
export class ListBarModule { }
