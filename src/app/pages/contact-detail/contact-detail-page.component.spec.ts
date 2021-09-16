import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailPageComponent } from './contact-detail-page.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {ImageCropperComponent} from "../../components/image-cropper/image-cropper.component";
import {BrowserModule, HammerModule} from "@angular/platform-browser";
import {ImageCropperModule} from "ngx-image-cropper";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('ContactDetailPageComponent', () => {
  let component: ContactDetailPageComponent;
  let fixture: ComponentFixture<ContactDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HammerModule,
        BrowserModule,
        ImageCropperModule,
        FormsModule,
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        }),
      ],
      declarations: [ContactDetailPageComponent, ImageCropperComponent],
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
