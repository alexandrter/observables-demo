import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClickerComponent} from './observable-demo/clicker/clicker.component';
import {ShowerComponent} from "./observable-demo/clicker/shower/shower.component";

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ShowerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
