import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { FormsModule } from "@angular/forms";
import { CodesComponent } from './codes/codes.component';
import { ContactGroupsComponent } from './contact-groups/contact-groups.component';
import { ContactRelationsComponent } from './contact-relations/contact-relations.component';
import { CreateRandomContactsComponent } from './create-random-contacts/create-random-contacts.component';
import { ImportContactsComponent } from './import-contacts/import-contacts.component';
import { ExportContactsComponent } from './export-contacts/export-contacts.component';
import { ListBarModule } from "../../components/list-bar/list-bar.module";

@NgModule({
  declarations: [
    ConfigurationComponent,
    CodesComponent,
    ContactGroupsComponent,
    ContactRelationsComponent,
    CreateRandomContactsComponent,
    ImportContactsComponent,
    ExportContactsComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ListBarModule,
  ]
})
export class ConfigurationModule { }
