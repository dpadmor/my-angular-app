import { Component } from '@angular/core';
import {Hero, HEROES} from "./model/hero";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero : Hero;
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }
}








