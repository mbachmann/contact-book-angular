import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ContactsService} from "../../openapi/openapi-gen";
import {ActivatedRoute, Router} from "@angular/router";
import {parseIsoDateStrToDate} from "../../shared/utils";

@Component({
  selector: 'app-phone-book-detail',
  templateUrl: './phone-book-detail.component.html',
  styleUrls: ['./phone-book-detail.component.scss']
})
export class PhoneBookDetailComponent implements OnInit {

  private routeSubscription: Subscription | undefined;
  private subscription: Subscription | undefined;
  private id: number | undefined ;

  constructor(private readonly contactControllerService: ContactsService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

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
      console.log(this.id);
    });

  }

  getId(): number | undefined {

    return this.id;
  }


}
