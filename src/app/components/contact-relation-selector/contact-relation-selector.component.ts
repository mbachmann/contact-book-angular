import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subscription} from "rxjs";
import {ConfigurationsService, ContactGroup, ContactRelation} from "../../openapi/openapi-gen";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact-relation-selector',
  templateUrl: './contact-relation-selector.component.html',
  styleUrls: ['./contact-relation-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => ContactRelationSelectorComponent)
  }]
})
export class ContactRelationSelectorComponent implements ControlValueAccessor, OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  contactRelations: Array<ContactRelation> = [];
  selectedContactRelations: Array<ContactRelation> = [];
  propagateChange = (_: Array<ContactRelation>) => {};
  onTouched = () => {};
  touched = false;
  dropdownSettings: IDropdownSettings = {};
  isDisable: boolean = false;

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
    this.subscription = this.configurationService.getAllContactRelations(0, 20, [], 'response').subscribe(
      (res: HttpResponse<Array<ContactRelation>>) => {
        if (res.body != null) {
          this.contactRelations = res.body;
          this.contactRelations.forEach(relation => delete relation['contacts']);
          // @ts-ignore
          this.contactRelations.forEach(relation => relation['name'] = this.getName(relation.contactRelationType));
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
    this. onChange();
  }

  onSelectAll(items: any) {
    this.selectedContactRelations = items;
    this. onChange();
  }

  onDeSelect(items: any) {
    this. onChange();
  }
  onDeSelectAll(items: any) {
    this.selectedContactRelations.splice(0,this.selectedContactRelations.length);
    this. onChange();
  }

  onChange() {
    this.markAsTouched();
    this.propagateChange(this.mapContactGroups(this.selectedContactRelations));
  }

  mapContactGroups(groups: Array<ContactRelation>) : Array<ContactRelation> {
    return groups.map((group) => {
      return (this.contactRelations.filter(g => (g.id === group.id)))[0];
    });
  }

  registerOnChange(onChanged: any): void {
    this.propagateChange = onChanged;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  writeValue(relations: Array<ContactRelation>): void {
    this.selectedContactRelations = relations;
    if (relations.length > 0) {
       // @ts-ignore
      relations.forEach(relation => relation['name'] = this.getName(relation.contactRelationType) );
      this.selectedContactRelations = relations;
    }
  }

  getName(name: any): string {
     return name.toLocaleLowerCase();
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

}
