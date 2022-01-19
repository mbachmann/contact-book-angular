import { Component, OnInit } from '@angular/core';
import {ConfigurationsService, ContactRelation} from "../../../../openapi/openapi-gen";
import {DataListService, ISortDirection} from "../../../../shared/services/data/data-list.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact-relations',
  templateUrl: './contact-relation-list.component.html',
  styleUrls: ['./contact-relation-list.component.scss']
})
export class ContactRelationListComponent implements OnInit {

  totalItems: string = '0';
  contactRelationsList: Array<ContactRelation> = [];
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

  getData(page: number, size: number, sort: [], self: ContactRelationListComponent) {
    self.configurationService.getAllContactRelations(page, size, sort, 'response').subscribe(
        (res: HttpResponse<Array<ContactRelation>>) => {
          if (res.body != null) {
            self.contactRelationsList = res.body;
            self.totalItems = res.headers.get('x-total-count')!;
          }
        }, err => console.log(err)
    );
  }
}
