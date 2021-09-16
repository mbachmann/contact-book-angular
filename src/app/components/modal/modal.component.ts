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
import {ModalChild} from "./modal-child";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'bootstrap-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('dialog', [
      transition('none => block', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(200)
      ]),
      transition('block => inline-block', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() modalTitle!: string
  @Input() cancelText!: string;
  @Input() okText!: string;
  @Input() showClose: boolean = true;

  @Output() onOk = new EventEmitter<string>();
  private element: HTMLElement;
  displayStyle = "none";

  @ContentChild('modalChild') child: (Component & ModalChild) | undefined ;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
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
   * open modal with display:block
   */
  open(): void {
      this.displayStyle = "block";
  }

  getChildComponent(): (Component & ModalChild) | undefined   {
    return this.child;
  }

  /**
   * open modal with display:none
   * wait til closing animation has finished
   */
  close(): void {
    this.displayStyle = "inline-block"
    setTimeout(() => this.displayStyle = "none", 50);
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

  onOkCancel() {
    this.close();
  }

  onClose() {
    this.close();
  }
}
