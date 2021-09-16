import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ContentChild, Output, EventEmitter
} from '@angular/core';

import { ModalService } from './modal.service';
import * as bootstrap from "bootstrap";
import {Modal} from "bootstrap";
import {ModalChild} from "./modal-child";
import {activateTooltip} from "../../shared/utils";

@Component({
  selector: 'bootstrap-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() modalTitle!: string
  @Input() cancelText!: string;
  @Input() okText!: string;

  @Output() onOk = new EventEmitter<string>();
  private element: HTMLElement;
  private bootstrapModal: Modal | undefined;


  @ContentChild('modalChild') child: (Component & ModalChild) | undefined ;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    activateTooltip();
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // add self (this modal instance) to the modal service so it's accessible from controllers

    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  /**
   * open bootstrap 5 modal
   */
  open(): void {
      let jwModal = this.element.getElementsByClassName('bootstrap-modal').item(0)!;
      this.bootstrapModal = new bootstrap.Modal(jwModal, {});
      this.bootstrapModal.show();
  }

  getChildComponent(): (Component & ModalChild) | undefined   {
    return this.child;
  }

  /**
   * close modal
   */
  close(): void {
    if (this.bootstrapModal !== undefined) {
      this.bootstrapModal.hide();
    }
  }

  /**
   * on Click of OK Button
   */
  onOkClick() {
    if (this.child !== undefined) {
      this.onOk.emit(this.child.getData());
    }
    this.close();
  }
}
