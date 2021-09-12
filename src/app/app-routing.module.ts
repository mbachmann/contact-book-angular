import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListPageComponent } from './components/contact-list/contact-list-page.component';
import { ContactDetailPageComponent } from './components/contact-detail/contact-detail-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: ContactListPageComponent,
  },
  {
    path: 'phone-book-item',
    component: ContactDetailPageComponent,
  },
  {
    path: 'phone-book-item/:id',
    component: ContactDetailPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
