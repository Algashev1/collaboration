import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import {StartPageComponent} from './start-page/start-page.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StartPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
