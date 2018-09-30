import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'participate-modal',
  templateUrl: './participate.component.html'
})
export class ParticipateModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {

  }
}

