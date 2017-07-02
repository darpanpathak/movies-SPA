import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AppService } from './providers/app-service.service';
import { NameFilter } from './pipes/name-filter.pipe';

import { AppRoutingModule } from './app.routes';
import { RouteAppComponent } from './pages/route-app/route-app.component';
import { GenresPipe } from './pipes/genres.pipe';
import { NvD3Component } from 'ng2-nvd3';

import { ChartsComponent } from './pages/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NameFilter,
    RouteAppComponent,
    GenresPipe,
    NvD3Component,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
