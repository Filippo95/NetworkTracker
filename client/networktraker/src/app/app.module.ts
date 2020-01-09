import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { TrafficComponent } from './traffic/traffic.component';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';
import { AliveDevicesComponent } from './alive-devices/alive-devices.component';
import { RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  { path: 'AliveDevices', component: AliveDevicesComponent },
  { path: 'Traffic',      component: TrafficComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TrafficComponent,
    AliveDevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
