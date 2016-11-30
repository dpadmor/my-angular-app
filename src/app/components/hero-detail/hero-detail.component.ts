import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../model/hero";
import {HeroService} from "../../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: 'module.id',
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  ngOnInit(): void {
    console.info("HeroDetail por parametro");
    this.route.params
      .switchMap((param: Params) => this.heroService.getHero(+param['id']))
      .subscribe(hero => this.hero = hero);
  }

  @Input()
  hero : Hero;

  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private location : Location
  ) { };

  goBack (): void {
    this.location.back();
  }




}
