import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'places',
  templateUrl: './places.component.html'
})

export class PlacesComponent implements OnInit {

  optionsSelect;

  company = [
    {title: "YellowRockets", type: "коворкинг", countStar: Array(5), description: "Описание места YellowRockets", url: "/src/resources/img/yr.jpg"},
    {title: "FUTUROOM", type: "коворкинг", countStar: Array(3), description: "Описание места FUTUROOM", url: "/src/resources/img/f.jpg"},
    {title: "LOFT", type: "коворкинг", countStar: Array(4),  description: "Описание места LOFT", url: "/src/resources/img/loft.jpg"}
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

  place(item) {
    this.router.navigate(['place-info']);
  }

}
