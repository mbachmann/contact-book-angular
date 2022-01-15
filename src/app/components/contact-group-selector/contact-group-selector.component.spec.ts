import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGroupSelectorComponent } from './contact-group-selector.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('ContactGroupSelectorComponent', () => {
  let component: ContactGroupSelectorComponent;
  let fixture: ComponentFixture<ContactGroupSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGroupSelectorComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 1,
            }),
          },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
