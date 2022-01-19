import { Component, OnInit } from '@angular/core';
import {ConfigurationsService, ContactGroup} from "../../../../openapi/openapi-gen";
import {HttpResponse} from "@angular/common/http";
import {DataListService, ISortDirection} from "../../../../shared/services/data/data-list.service";

@Component({
  selector: 'app-contact-group-list',
  templateUrl: './contact-group-list.component.html',
  styleUrls: ['./contact-group-list.component.scss']
})
export class ContactGroupListComponent implements OnInit {

  totalItems: string = '0';
  contactGroupList: Array<ContactGroup> = [];
  sortDirections: ISortDirection[] = [{column: "name", direction: "none"}] ;

  constructor(private readonly configurationService: ConfigurationsService, private dataService: DataListService) { }

  ngOnInit(): void {
    this.dataService.init(0, 20, [], this.sortDirections, this, this.getData);
    this.dataService.findAllData();
  }

  onChangeNameSort(selectedColumnName: string) {
    this.dataService.onChangeSort(selectedColumnName)
  }


  getSortDirection(selectedColumnName: string): string  {
    return this.dataService.getSortDirection(this.sortDirections, selectedColumnName).direction;
  }

  getData(page: number, size: number, sort: [], self: ContactGroupListComponent) {
    self.configurationService.getAllContactGroups(page, size, sort, 'response').subscribe(
        (res: HttpResponse<Array<ContactGroup>>) => {
          if (res.body != null) {
            self.contactGroupList = res.body;
            self.totalItems = res.headers.get('x-total-count')!;
          }
        }, err => console.log(err)
    );
  }
}
