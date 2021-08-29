import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhoneBookListComponent} from "./components/phone-book-list/phone-book-list.component";
import {PhoneBookDetailComponent} from "./components/phone-book-detail/phone-book-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: PhoneBookListComponent
  },
  {
    path: 'phone-book-item',
    component: PhoneBookDetailComponent
  },
  {
    path: 'phone-book-item/:id',
    component: PhoneBookDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
