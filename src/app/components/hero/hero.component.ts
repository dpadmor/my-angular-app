import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../model/hero";
import {Router} from "@angular/router";

@Component({
  moduleId: 'module.id',
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes : Hero [];
  selectedHero : Hero;
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };


  constructor (private route : Router, private heroService : HeroService) {
    console.info("ModuleId " + module.id);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }





  ngOnInit():void {
    this.getHeroes();
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.route.navigate(['/detail', this.selectedHero.id]);
  }



}
