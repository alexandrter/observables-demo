import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClickerComponent} from './observable-demo/clicker/clicker.component';
import {CounterService} from "./observable-demo/counter.service";
import {ShowerComponent} from "./observable-demo/shower/shower.component";
import {Shower2Component} from "./observable-demo/shower/shower2.component";

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ShowerComponent,
    Shower2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
