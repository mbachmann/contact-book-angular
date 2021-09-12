import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tooltip } from 'bootstrap';
import { activateTooltip } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'contact-book-angular';

  ngOnInit(): void {}

  ngOnDestroy() {}
}
