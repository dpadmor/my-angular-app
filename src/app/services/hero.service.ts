import { Injectable } from '@angular/core';
import {Hero} from "../model/hero";
import {HEROES} from "../model/mock-heroes";

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    console.info(Promise.resolve(HEROES));
    return Promise.resolve(HEROES);
  };

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    console.info("Servicio Hero");
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes2(): Hero[] {

    return HEROES;
  };
}
