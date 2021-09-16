import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Contact, ContactsService} from '../../openapi/openapi-gen';
import { ActivatedRoute, Router } from '@angular/router';
import { parseIsoDateStrToDate } from '../../shared/utils';
import * as bootstrap from 'bootstrap';
import {ModalService} from "../../components/modal/modal.service";
import {ModalChild} from "../../components/modal/modal-child";

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  private routeSubscription: Subscription | undefined;
  private subscription: Subscription | undefined;
  private id!: number;
  avatarWidth: number = 0;
  avatarHeight: number = 0;
  contact: Contact = {};
  bodyText: string = 'This text can be updated in modal 1';

  constructor(private readonly contactService: ContactsService, private route: ActivatedRoute, private router: Router, private modalService: ModalService) {}

  ngOnDestroy(): void {
    if (this.routeSubscription != undefined) {
      this.routeSubscription.unsubscribe();
    }
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.subscription = this.contactService.findById(this.id).subscribe(
      data => {
        this.contact = data;
        this.contact.birthDate = parseIsoDateStrToDate( this.contact.birthDate);
      },
      err => console.log(err)
    );
  }

  getId(): number | undefined {
    return this.id;
  }

  getAvatar(base64Photo: any, photoContentType: any) {
    if (base64Photo === undefined || base64Photo === null) return '';
    return 'data:' + photoContentType + ';base64,' + base64Photo;
  }

  getImageDimensions(base64Photo: any, photoContentType: string): Promise<Object> {
    let self = this;
    let avatar = this.getAvatar(base64Photo, photoContentType);

    return new Promise<Object> (function (resolved, rejected) {
      let image = new Image()

      image.onload = (() => {
        self.avatarWidth = image.naturalWidth;
        self.avatarHeight = image.naturalHeight;

        resolved({width: image.width, height: image.height});
      });
      if (avatar) {
        image.src = avatar;
      }
    });
  }

  getDim() {
    if (this.contact.photoContentType) {
      this.getImageDimensions(this.contact.photo, this.contact.photoContentType).then();
    }
  }

  openModal(id: string) {
    this.modalService.open(id);

  }

  openModalImageCropper(id: string) {
    this.modalService.open(id);
    let imageCropperComponent: ModalChild = this.modalService.getChildComponent(id)!;
    if (this.contact.photo) imageCropperComponent.setData(this.getAvatar(this.contact.photo, this.contact.photoContentType));
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getAvatarButtonText() {
    return this.contact.photo ? 'Change photo' : 'Add photo';
  }

  saveImage(baseImage64: string) {
    console.log(baseImage64);
    let base64Index = baseImage64.indexOf(';base64,') + ';base64,'.length;
    this.contact.photo = baseImage64.substring(base64Index);
  }
}
