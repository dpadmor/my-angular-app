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
    this.heroes = this.heroService.getHeroes2().slice(1,5);
    this.heroService.getHeroes()
      .then(heroes => console.info("Slice " + heroes.slice(1,5)));
    console.info(this.heroes);
  }

}
