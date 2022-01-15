import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigurationComponent} from './configuration.component';
import {CodesComponent} from "./codes/codes.component";
import {ContactGroupsComponent} from "./contact-groups/contact-groups.component";
import {ContactRelationsComponent} from "./contact-relations/contact-relations.component";
import {CreateRandomContactsComponent} from "./create-random-contacts/create-random-contacts.component";
import {ExportContactsComponent} from "./export-contacts/export-contacts.component";
import {ImportContactsComponent} from "./import-contacts/import-contacts.component";

const routes: Routes = [
    {
        path: '', component: ConfigurationComponent, children: [
            {path: 'codes', component: CodesComponent},
            {path: 'contact-groups', component: ContactGroupsComponent},
            {path: 'contact-relations', component: ContactRelationsComponent},
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
