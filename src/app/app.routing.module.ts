import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "./app-components/not-found/not-found.component";
import {MainComponent} from "./app-components/main/main.component";



let routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
