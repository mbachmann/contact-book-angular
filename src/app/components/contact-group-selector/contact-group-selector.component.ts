import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {ConfigurationsService, ContactGroup} from "../../openapi/openapi-gen";
import {HttpResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-contact-group-selector',
  templateUrl: './contact-group-selector.component.html',
  styleUrls: ['./contact-group-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => ContactGroupSelectorComponent)
  }]
})
export class ContactGroupSelectorComponent implements ControlValueAccessor, OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  contactGroups: Array<ContactGroup> = [];
  selectedContactGroups: Array<ContactGroup> = [];
  propagateChange = (_: Array<ContactGroup>) => {};
  dropdownSettings: IDropdownSettings = {};
  isDisabled: boolean = false;

  constructor(private readonly configurationService: ConfigurationsService) {}

  ngOnInit(): void {
    this.loadData();
    this.initMultiSelect();
  }

  ngOnDestroy(): void {
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  loadData() {
    this.subscription = this.configurationService.getAllContactGroups(0, 20, ['name'], 'response').subscribe(
      (res: HttpResponse<Array<ContactGroup>>) => {
        if (res.body != null) {
          this.contactGroups = res.body;
          // this.contactGroups.forEach(group => delete group['contacts']);
        }
      },
      err => console.log(err)
    );
  }

  initMultiSelect(): void {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      // disabledField: 'disabled',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onSelect(item: any) {
    this.onChange();
  }

  onSelectAll(items: any) {
    this.selectedContactGroups = items;
    this.onChange();
  }

  onDeSelect(item: any) {
    this.onChange();
  }
  onDeSelectAll(items: any) {
    this.selectedContactGroups.splice(0,this.selectedContactGroups.length);
    this.onChange();
  }

  onChange() {
    this.propagateChange(this.mapContactGroups(this.selectedContactGroups));
  }

  mapContactGroups(groups: Array<ContactGroup>) : Array<ContactGroup> {
     return groups.map((group) => {
        return (this.contactGroups.filter(g => (g.id === group.id)))[0];
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(groups: Array<ContactGroup>): void {
    this.selectedContactGroups = groups;
  }

}
