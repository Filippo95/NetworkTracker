import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { TrafficComponent } from './traffic/traffic.component';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TrafficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
