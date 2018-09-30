import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { FooterComponent } from './footer/footer.component';
import { PlacesComponent } from './places/places.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModalContent } from './header/auth/auth.component';
import { RegModalContent } from './header/reg/reg.component';
import { ParticipateModalComponent } from './event-info/participate/participate.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaceInfoComponent } from './place-info/place-info.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { PlaceService } from './shared/place/place.service';
import { PlaceListComponent } from './place-list/place-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReserveModalComponent} from './place-info/reserve/reserve.component';
import {EventService} from './shared/event/event.service';

const appRoutes: Routes = [
  { path: '',
    component: StartPageComponent
  },
  { path: 'start-page', component: StartPageComponent },
  { path: 'developments', component: DevelopmentsComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'place-info', component: PlaceInfoComponent },
  { path: 'event-info/:id', component: EventInfoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent,
    PlaceInfoComponent,
    EventInfoComponent,
    AuthModalContent,
    RegModalContent,
    ReserveModalComponent,
    ParticipateModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent,
    PlaceInfoComponent,
    EventInfoComponent,
    RouterModule
  ],
  providers: [PlaceService, EventService],
  entryComponents: [AuthModalContent,RegModalContent, ParticipateModalComponent, ReserveModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
