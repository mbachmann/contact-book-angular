import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailPageComponent } from './contact-detail-page.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserModule, HammerModule} from "@angular/platform-browser";
import {ImageCropperModule} from "ngx-image-cropper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {DropZoneComponent} from "../../components/drop-zone/drop-zone.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ImageLoadProcessModule} from "../../components/image-load-process/image-load-process.module";
import {ContactGroupSelectorModule} from "../../components/contact-group-selector/contact-group-selector.module";
import {ContactGroupSelectorComponent} from "../../components/contact-group-selector/contact-group-selector.component";
import {
  ContactRelationSelectorModule
} from "../../components/contact-relation-selector/contact-relation-selector.module";
import {DropZoneModule} from "../../components/drop-zone/drop-zone.module";
import {ModalModule} from "../../components/modal/modal.module";
import {TooltipModule} from "../../shared/tooltip/tooltip.module";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

describe('ContactDetailPageComponent', () => {
  let component: ContactDetailPageComponent;
  let fixture: ComponentFixture<ContactDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        HttpClientModule,
        HammerModule,
        BrowserModule,
        DropZoneModule,
        ModalModule,
        ImageCropperModule,
        ImageLoadProcessModule,
        ContactGroupSelectorModule,
        ContactRelationSelectorModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
        TooltipModule
      ],
      declarations: [ContactDetailPageComponent],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
