import {Component, Input, OnInit} from '@angular/core';


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

}
