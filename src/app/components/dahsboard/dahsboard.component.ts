import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../model/hero";

@Component({
  moduleId: 'module.id',
  selector: 'my-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit():void {
    console.info("DashBoard " + this.heroService.getHeroes());
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
    console.info(this.heroes);
  }

}
