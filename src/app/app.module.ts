import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule, HttpBackend, HttpFetchBackend } from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
    // other declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppComponent,
    CommonModule,
    // other imports
  ],
  providers: [
    //{ provide: HttpBackend, useClass: HttpFetchBackend },
  ],
  //bootstrap: [AppComponent]
  bootstrap: []
})
export class AppModule { }
