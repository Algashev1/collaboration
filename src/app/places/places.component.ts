import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'places',
  templateUrl: './places.component.html'
})

export class PlacesComponent implements OnInit {

  optionsSelect;

  ngOnInit(): void {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

}
