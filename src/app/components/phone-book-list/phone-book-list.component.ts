import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ContactsService, ContactViewList} from "../../openapi/openapi-gen";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.scss']
})
export class PhoneBookListComponent implements OnInit {

  private subscription: Subscription | undefined;
  phoneBookList: Array<ContactViewList> = [];
  totalItems: string = "0";

  constructor(private readonly contactService: ContactsService) {}

  ngOnDestroy(): void {

    if (this.subscription != undefined)  {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.contactService.findAllContactViewList("","*","*", 0, 20, [], 'response').subscribe(
      (res: HttpResponse<Array<ContactViewList>>) => {
        if (res.body != null) {
          this.phoneBookList = res.body;
          const keys = res.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${res.headers.get(key)}`);
          console.log(headers);
          this.totalItems = res.headers.get("x-total-count")!;
          console.log(JSON.stringify(res.headers));
        }
      },
      err => console.log(err)
    );
  }

  getAvatar(data: any) {
    if (data === null) return null;
    return "data:image/png;base64," + data;
  }


}
