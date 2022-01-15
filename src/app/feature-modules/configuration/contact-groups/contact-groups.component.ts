import { Component, OnInit } from '@angular/core';
import {ConfigurationsService, ContactGroup, ContactsService, ContactViewList} from "../../../openapi/openapi-gen";
import {HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contact-groups',
  templateUrl: './contact-groups.component.html',
  styleUrls: ['./contact-groups.component.scss']
})
export class ContactGroupsComponent implements OnInit {

  totalItems: string = '0';
  constructor(private readonly configurationService: ConfigurationsService) { }
  contactGroupList: Array<ContactGroup> = [];

  ngOnInit(): void {

    this.configurationService.getAllContactGroups(0, 20, [], 'response').subscribe(
        (res: HttpResponse<Array<ContactGroup>>) => {
          if (res.body != null) {
            this.contactGroupList = res.body;
            const keys = res.headers.keys();
            const headers = keys.map(key => `${key}: ${res.headers.get(key)}`);
            // console.log(headers);
            this.totalItems = res.headers.get('x-total-count')!;
            // console.log(JSON.stringify(res.headers));
          }
        },
        err => console.log(err)
    );
  }

}
