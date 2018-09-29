import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'reg-modal',
  templateUrl: './reg.component.html'
})
export class RegModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {

  }
}

