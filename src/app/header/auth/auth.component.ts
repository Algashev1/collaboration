import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'auth-modal',
  templateUrl: './auth.component.html'
})
export class AuthModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {

  }
}

