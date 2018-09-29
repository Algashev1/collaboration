import { PlaceService } from '../shared/place/place.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
})

export class PlaceListComponent implements OnInit {
  places: Array<any>;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getAll().subscribe(data => {
      this.places = data;
    });
  }
}
