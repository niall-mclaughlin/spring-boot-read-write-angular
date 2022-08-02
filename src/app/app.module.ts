import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import {PersonSelectComponent} from "./components/person/person-select/person-select";
import {PersonViewerComponent} from "./components/person/person-viewer/person-viewer";
import {PersonComponent} from "./components/person/person";

@NgModule({
  declarations: [
    PersonSelectComponent,
    PersonViewerComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
