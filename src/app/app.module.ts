import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import {StartPageComponent} from './start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    StartPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
