import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AuthModalContent} from './auth/auth.component';
import {RegModalContent} from './reg/reg.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private modalService: NgbModal) {

  }


  auth() {
    const modalRef = this.modalService.open(AuthModalContent);
  }

  reg() {
    const modalRef = this.modalService.open(RegModalContent);
  }

}
