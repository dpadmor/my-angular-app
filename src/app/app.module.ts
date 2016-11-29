import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
