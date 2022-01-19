import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigurationComponent} from './configuration.component';
import {CodesComponent} from "./codes/codes.component";
import {ContactGroupListComponent} from "./contact-group/list/contact-group-list.component";
import {ContactRelationListComponent} from "./contact-relation/list/contact-relation-list.component";
import {CreateRandomContactsComponent} from "./create-random-contacts/create-random-contacts.component";
import {ExportContactsComponent} from "./export-contacts/export-contacts.component";
import {ImportContactsComponent} from "./import-contacts/import-contacts.component";
import {ContactGroupDialogComponent} from "./contact-group/dialog/contact-group-dialog.component";
import {ContactRelationDialogComponent} from "./contact-relation/dialog/contact-relation-dialog.component";

const routes: Routes = [
    {
        path: '', component: ConfigurationComponent, children: [
            {path: 'codes', component: CodesComponent},
            {path: 'contact-groups', component: ContactGroupListComponent},
            {path: 'contact-groups-item/:id', component: ContactGroupDialogComponent},
            {path: 'contact-relations', component: ContactRelationListComponent},
            {path: 'contact-relations-item/:id', component: ContactRelationDialogComponent},
            {path: 'create-random-contacts', component: CreateRandomContactsComponent},
            {path: 'export-contacts', component: ExportContactsComponent},
            {path: 'import-contacts', component: ImportContactsComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule {
}
