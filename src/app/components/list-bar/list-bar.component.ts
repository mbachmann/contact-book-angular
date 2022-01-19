import { Component, OnInit } from '@angular/core';
import {DataListService} from "../../shared/services/data/data-list.service";

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.scss']
})
export class ListBarComponent implements OnInit {

  constructor(private dataService: DataListService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.dataService.findAllData();
  }
}
