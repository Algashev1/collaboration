import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import {StartPageComponent} from './start-page/start-page.component';
import {FooterComponent} from './footer/footer.component';
import {PlacesComponent} from './places/places.component';
import {DevelopmentsComponent} from './developments/developments.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthModalContent} from './header/auth/auth.component';
import {RegModalContent} from './header/reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent,
    AuthModalContent,
    RegModalContent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    PlacesComponent,
    DevelopmentsComponent
  ],
  providers: [],
  entryComponents: [AuthModalContent,RegModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
