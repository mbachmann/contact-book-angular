import {Injectable} from '@angular/core';
import {Router} from "@angular/router";


export interface ISortDirection {
    column: string;
    direction: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataListService {

    currentSortColumnName = "";

    page = 0;
    size = 20;
    sort = [] as any;
    component: any;
    sortDirections: ISortDirection[] = [];
    findAllDataFromApi = (page: number, size: number, sort: [], component: any): void => {} ;

    constructor( private router: Router,) {
    }

    getSortDirection(sortDirections: ISortDirection[], selectedColumnName: string): ISortDirection {
        let sortDirection = sortDirections.find(i => i.column === selectedColumnName);
        if (sortDirection === undefined) {
            sortDirection = {column: selectedColumnName, direction: 'none'};
        }
        return sortDirection;
    }

    onChangeSort( selectedColumnName: string) {
        if (this.currentSortColumnName !== selectedColumnName) {
            this.sortDirections.forEach(sortDirection => sortDirection.direction = 'none')
        }
        this.currentSortColumnName = selectedColumnName;
        let sortDirection = this.getSortDirection(this.sortDirections, selectedColumnName);

        if (sortDirection !== undefined) {
            if (sortDirection.direction === "none") {
                sortDirection.direction = "up";
                this.sort = [selectedColumnName + ',asc'];
            } else if (sortDirection.direction === "up") {
                sortDirection.direction = "down";
                this.sort = [selectedColumnName + ',desc'];
            } else if (sortDirection.direction === "down") {
                sortDirection.direction = "none";
                this.sort = [selectedColumnName];
            }
            this.findAllDataFromApi(this.page, this.size, this.sort, this.component);
        }
    }

    onNew() {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate(['/contact-book-item/0']));
    }

    init(page: number, size: number, sort: [], sortDirections: ISortDirection[], component: any, getDataFromBackend: (page: number, size: number, sort: [], component: any) => void) {
        this.page = page;
        this.size = size;
        this.sort = sort;
        this.sortDirections = sortDirections;
        this.component = component;
        this.findAllDataFromApi = getDataFromBackend;
    }

    findAllData() {
        this.findAllDataFromApi(this.page, this.size, this.sort, this.component);
    }


}
