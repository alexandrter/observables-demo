import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { FormComponent } from './observable-demo/form/form.component';
import {HeaderComponent} from "./observable-demo/header/header.component";
import { InfoComponent } from './observable-demo/info/info.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
