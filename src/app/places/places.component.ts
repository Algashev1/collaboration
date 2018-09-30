import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlaceService} from '../shared/place/place.service';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'places',
  templateUrl: './places.component.html'
})

export class PlacesComponent implements OnInit {

  optionsSelect;

  places: Array<any>;

  stars: Array<Array<number>>;

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
    var index = 0;
    this.optionsSelect = [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
    ];
    this.placeService.getAll().subscribe(data => {
      this.places = data;
      console.log('--', 'stepa pidor', this.places);
      this.stars = Array();
      console.log('this stars',this.stars);
      this.places.forEach(place => {
        this.stars.push(Array(place.rating));
        console.log('---', this.stars);
        console.log(place.rating);
      });
      console.log('result', this.stars);
    });

  }

  place(item) {
    this.router.navigate(['place-info']);
  }

}
