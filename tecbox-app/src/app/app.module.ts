import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TecBoxMaterialModule} from "./module/tec-box-material.module";
import {MatNativeDateModule} from "@angular/material";
import {TecBoxRoutingModule} from "./module/tec-box-routing.module";
import {SomeDataComponent} from "./somedata/some-data.component";
import {Component2Component} from "./component2/component2.component";
import {Component3Component} from "./component3/component3.component";



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SomeDataComponent,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TecBoxMaterialModule,
    TecBoxRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
