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
