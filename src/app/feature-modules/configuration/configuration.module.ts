import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { FormsModule } from "@angular/forms";
import { CodesComponent } from './codes/codes.component';
import { ContactGroupListComponent } from './contact-group/list/contact-group-list.component';
import { ContactRelationListComponent } from './contact-relation/list/contact-relation-list.component';
import { CreateRandomContactsComponent } from './create-random-contacts/create-random-contacts.component';
import { ImportContactsComponent } from './import-contacts/import-contacts.component';
import { ExportContactsComponent } from './export-contacts/export-contacts.component';
import { ListBarModule } from "../../components/list-bar/list-bar.module";
import { ContactRelationDialogComponent } from './contact-relation/dialog/contact-relation-dialog.component';
import { ContactGroupDialogComponent } from './contact-group/dialog/contact-group-dialog.component';

@NgModule({
  declarations: [
    ConfigurationComponent,
    CodesComponent,
    ContactGroupListComponent,
    ContactRelationListComponent,
    CreateRandomContactsComponent,
    ImportContactsComponent,
    ExportContactsComponent,
    ContactRelationDialogComponent,
    ContactGroupDialogComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ListBarModule,
  ]
})
export class ConfigurationModule { }
