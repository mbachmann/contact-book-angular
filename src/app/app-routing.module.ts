import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPageComponent } from './pages/contact-list/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail/contact-detail-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContactListPageComponent,
  },
  {
    path: 'contact-book-item',
    component: ContactDetailPageComponent,
  },
  {
    path: 'contact-book-item/:id',
    component: ContactDetailPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  { path: 'configuration', loadChildren: () => import('./feature-modules/configuration/configuration.module').then(m => m.ConfigurationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
