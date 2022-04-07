import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from "./observable-demo/info/info.component";
import {FormComponent} from "./observable-demo/form/form.component";


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full'},
  { path: 'info', component: InfoComponent},
  { path: 'form', component: FormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
