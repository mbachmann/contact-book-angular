import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactsService, ContactViewList } from '../../openapi/openapi-gen';
import { HttpResponse } from '@angular/common/http';
import { activateTooltip } from '../../shared/utils';

@Component({
  selector: 'app-contact-book-list',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss'],
})
export class ContactListPageComponent implements OnInit {
  private subscription: Subscription | undefined;
  contactBookList: Array<ContactViewList> = [];
  totalItems: string = '0';

  constructor(private readonly contactService: ContactsService) {}

  ngOnDestroy(): void {
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    activateTooltip();

    this.subscription = this.contactService.findAllContactViewList('', '*', '*', 0, 20, [], 'response').subscribe(
      (res: HttpResponse<Array<ContactViewList>>) => {
        if (res.body != null) {
          this.contactBookList = res.body;
          const keys = res.headers.keys();
          const headers = keys.map(key => `${key}: ${res.headers.get(key)}`);
          console.log(headers);
          this.totalItems = res.headers.get('x-total-count')!;
          console.log(JSON.stringify(res.headers));
        }
      },
      err => console.log(err)
    );
  }

  getAvatar(data: any) {
    if (data === null) return null;
    return 'data:image/png;base64,' + data;
  }

  getName(firstName: any, lastName: any, company: any): string {
    if (typeof company === 'undefined' || company === null) {
      return firstName + ' ' + lastName;
    } else {
      return company + '<br/>' + firstName + ' ' + lastName;
    }
  }
}
