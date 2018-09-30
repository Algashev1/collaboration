import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReserveModalComponent} from './reserve/reserve.component';


@Component({
  selector: 'place-info',
  templateUrl: './place-info.component.html'
})

export class PlaceInfoComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() countStar: Array<number>;
  @Input() description: string;
  @Input() url: string;

  ngOnInit(): void {

  }

  constructor(private modalService: NgbModal) {

  }

  reserve() {
    const modalRef = this.modalService.open(ReserveModalComponent);
  }

}
