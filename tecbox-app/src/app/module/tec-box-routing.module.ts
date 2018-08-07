import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SomeDataComponent} from "../somedata/some-data.component";
import {Component2Component} from "../component2/component2.component";
import {Component3Component} from "../component3/component3.component";



const appRoutes: Routes = [
  {
    path: 'somedata',
    component: SomeDataComponent
  },
  {
    path: 'component2',
    component: Component2Component
  },
  {
    path: 'component3',
    component: Component3Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class TecBoxRoutingModule { }
