import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRelationSelectorComponent } from './contact-relation-selector.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";

describe('ContactRelationSelectorComponent', () => {
  let component: ContactRelationSelectorComponent;
  let fixture: ComponentFixture<ContactRelationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRelationSelectorComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRelationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
