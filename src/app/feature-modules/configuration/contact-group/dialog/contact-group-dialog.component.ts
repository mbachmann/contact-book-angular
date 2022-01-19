import { Component, OnInit } from '@angular/core';
import {parseIsoDateStrToDate} from "../../../../shared/utils";
import {ConfigurationsService, Contact, ContactGroup, ContactsService} from "../../../../openapi/openapi-gen";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalService} from "../../../../components/modal/modal.service";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-group-dialog',
  templateUrl: './contact-group-dialog.component.html',
  styleUrls: ['./contact-group-dialog.component.scss']
})
export class ContactGroupDialogComponent implements OnInit {

  contactGroup!: ContactGroup;
  private routeSubscription: Subscription | undefined;
  private subscription: Subscription | undefined;
  private id!: number;
  form = this.formBuilder.group({
    id: [{value: 0, disabled: true}],
    name: [{value: '', disabled: true}],
  });
  constructor(private readonly configurationService: ConfigurationsService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }


    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  loadData() {
    this.subscription = this.configurationService.getContactGroup(this.id).subscribe(
        data => {
          this.contactGroup = data;

          this.initFormGroupValues(this.contactGroup)
        },
        err => console.log(err)
    );
  }

  initFormGroupValues(contactGroup: ContactGroup) {
    this.form.patchValue({
      id: contactGroup.id,
      name: contactGroup.name,
    });
  }
}
