import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TitleComponentComponent} from "./app-components/title-component/title-component.component";
import {NotFoundComponent} from "./app-components/not-found/not-found.component";
import {AppRoutingModule} from "./app.routing.module";
import {MainComponent} from "./app-components/main/main.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
