import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClickerComponent} from './observable-demo/clicker/clicker.component';
import {CounterService} from "./observable-demo/counter.service";
import {ShowerComponent} from "./observable-demo/shower/shower.component";

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ShowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
