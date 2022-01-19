import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGroupListComponent } from './contact-group-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ListBarModule} from "../../../components/list-bar/list-bar.module";

describe('ContactGroupsComponent', () => {
  let component: ContactGroupListComponent;
  let fixture: ComponentFixture<ContactGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGroupListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        CommonModule,
        ListBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
