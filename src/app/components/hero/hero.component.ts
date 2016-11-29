import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../model/hero";

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
  heroes : Hero [];
  selectedHero : Hero;
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };

  constructor (private heroService : HeroService) {

  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit():void {
    this.getHeroes();
  }

}
