import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'reserve-modal',
  templateUrl: './reserve.component.html'
})
export class ReserveModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {

  }
}
