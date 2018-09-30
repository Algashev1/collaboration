import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlaceService} from '../shared/place/place.service';


@Component({
  selector: 'places',
  templateUrl: './places.component.html'
})

export class PlacesComponent implements OnInit {

  optionsSelect;

  places: Array<any>;

  company = [
    {
      title: 'YellowRockets',
      type: 'коворкинг',
      countStar: Array(5),
      description: 'Описание места YellowRockets',
      url: '/src/resources/img/yr.jpg'
    },
    {title: 'FUTUROOM', type: 'коворкинг', countStar: Array(3), description: 'Описание места FUTUROOM', url: '/src/resources/img/f.jpg'},
    {title: 'LOFT', type: 'коворкинг', countStar: Array(4), description: 'Описание места LOFT', url: '/src/resources/img/loft.jpg'}
  ];

  constructor(private router: Router, private placeService: PlaceService) {

  }

  ngOnInit(): void {
    this.optionsSelect = [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
    ];
    this.placeService.getAll().subscribe(data => {
      this.places = data;
    });
  }

  place(item) {
    this.router.navigate(['place-info']);
  }

}
