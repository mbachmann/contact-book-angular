import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {Contact, ContactsService} from '../../openapi/openapi-gen';
import {ActivatedRoute, Router} from '@angular/router';
import {byteSize, extractMimeType, kByteSize, parseIsoDateStrToDate} from '../../shared/utils';
import {ModalService} from "../../components/modal/modal.service";
import {ModalChild} from "../../components/modal/modal-child";
import {AbstractControlOptions, FormBuilder, Validators} from "@angular/forms";
import {BsDatepickerConfig, BsLocaleService} from "ngx-bootstrap/datepicker";
import {atLeastOne} from "../../shared/at-least-one.validator";

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription | undefined;
  private subscription: Subscription | undefined;
  private id!: number;
  avatarWidth: number = 0;
  avatarHeight: number = 0;
  contact: Contact = {};
  bodyText: string = 'This text can be updated in modal 1';
  bsConfig?: Partial<BsDatepickerConfig>;
  locale = 'en';
  isEdit: boolean = false;
  isNew: boolean = false;

  @ViewChild('avatar') avatar!: ElementRef;

  form = this.formBuilder.group({
      id: [{value: 0, disabled: true}],
      firstName: [{value: '', disabled: true}],
      middleName: [{value: '', disabled: true}],
      lastName: [{value: '', disabled: true}],
      company: [{value: '', disabled: true}],
      birthDate: [{value: '', disabled: true}],
      notes: [{value: '', disabled: true}],
      phones: [{value: '', disabled: true}],
      addresses: [{value: '', disabled: true}],
      emails: [{value: '', disabled: true}],
      relations: [{value: '', disabled: true}],
      groups: [{value: '', disabled: true}],
    },
    {validator: atLeastOne(Validators.required, ['lastName', 'company'])} as AbstractControlOptions);


  constructor(private readonly contactService: ContactsService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService,
              private formBuilder: FormBuilder,
              private bsLocaleService: BsLocaleService
  ) {
  }

  ngOnDestroy(): void {
    if (this.routeSubscription != undefined) {
      this.routeSubscription.unsubscribe();
    }
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }

    this.initControls();

    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id > 0) {
      this.loadData();
      this.isNew = false;
      this.editForm(false);
    } else {
      this.isNew = true;
      this.editForm(true);
    }
    this.getAvatarDimension(this.contact);
  }

  editForm(isEdit: boolean) {
    this.isEdit = isEdit;
    isEdit ? this.form.enable() : this.form.disable();
  }

  loadData() {
    this.subscription = this.contactService.findById(this.id).subscribe(
      data => {
        this.contact = data;
        this.contact.birthDate = parseIsoDateStrToDate(this.contact.birthDate);
        this.initFormGroupValues(this.contact)
      },
      err => console.log(err)
    );
  }

  initControls() {
    this.bsConfig = Object.assign({},
      {
        containerClass: 'theme-default',
        dateInputFormat: 'YYYY-MM-DD'
      });

    this.bsLocaleService.use(this.locale);
  }

  initFormGroupValues(contact: Contact) {
    this.form.patchValue({
      id: contact.id,
      firstName: contact.firstName,
      middleName: contact.middleName,
      lastName: contact.lastName,
      company: contact.company,
      birthDate: contact.birthDate,
      notes: contact.notes,
      phones: contact.phones,
      addresses: contact.addresses,
      emails: contact.emails,
      relations: contact.relations,
      groups: contact.groups,
      avatar: this.getAvatar(contact.photo, contact.photoContentType),
      photoContentType: contact.photoContentType,
    });
  }

  getId(): number | undefined {
    return this.id;
  }

  getAvatar(base64Photo: any, photoContentType: any) {
    if (base64Photo === undefined || base64Photo === null) return '';
    return 'data:' + photoContentType + ';base64,' + base64Photo;
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
    this.contact.photoContentType = extractMimeType(baseImage64);
    let base64Index = baseImage64.indexOf(';base64,') + ';base64,'.length;
    this.contact.photo = []
    this.contact.photo[0] = baseImage64.substring(base64Index);
  }

  onSubmit(): void {

  }


  onEdit() {
    this.editForm(true);
  }

  onCancel() {
    this.editForm(false);
  }

  onSave() {
    this.saveContact();
    this.editForm(false);
    this.isNew = false;
  }

  onRefresh() {
    this.loadData();

  }

  onNew() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/contact-book-item/0']));
  }

  private saveContact() {

  }

  private getAvatarDimension(contact: Contact) {
    let self = this;

    setTimeout(() => {
      if (self.avatar !== undefined && self.contact.photoContentType) {
        let img = self.avatar.nativeElement;
        self.avatarWidth = img.naturalWidth;
        self.avatarHeight = img.naturalHeight;
        console.log("size:", kByteSize(img.src));
      }
    }, 500);

  }
}
