import {Component, Injectable} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {ModalChild} from "./modal-child";

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: ModalComponent[] = [];

  /**
   * add modal to array of active modals
   * @param modal the modal component
   */
  add(modal: any) {

    this.modals.push(modal);
  }

  /**
   * remove modal from array of active modals
   * @param id the id of the modal component
   */
  remove(id: string) {

    this.modals = this.modals.filter(x => x.id !== id);
  }

  /**
   * open modal specified by id
   * @param id the id of the modal component
   */
  open(id: string): ModalComponent  {

    const modal = this.modals.find(x => x.id === id)!;
    modal.open();
    return modal;
  }

  /**
   * The get child component as part of ng-component with the id child
   * @param id the id of the modal component
   */
  getChildComponent(id: string): (Component & ModalChild) | undefined {
    const modal = this.modals.find(x => x.id === id)!;
    return modal.getChildComponent();
  }

  /**
   * close modal specified by id
   * @param id the id of the modal component
   */
  close(id: string) {
    const modal = this.modals.find(x => x.id === id)!;
    modal.close();
  }
}
