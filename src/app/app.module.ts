import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import {HeroService} from "./services/hero.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DahsboardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }
