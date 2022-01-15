import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGroupsComponent } from './contact-groups.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ListBarModule} from "../../../components/list-bar/list-bar.module";

describe('ContactGroupsComponent', () => {
  let component: ContactGroupsComponent;
  let fixture: ComponentFixture<ContactGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGroupsComponent ],
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
    fixture = TestBed.createComponent(ContactGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
