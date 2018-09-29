import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html'
})

export class StartPageComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }

  event(item) {
    //this.router.navigate(['event-info']);
  }

}
