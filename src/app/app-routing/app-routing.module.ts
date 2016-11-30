import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {HeroComponent} from "../components/hero/hero.component";
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";
import {DahsboardComponent} from "../components/dahsboard/dahsboard.component";


const routes : Routes =  [
  { path: 'heroes', component: HeroComponent },
  { path: 'detail/:id', component : HeroDetailComponent },
  { path: 'dashboard', component: DahsboardComponent },
  { path : '', redirectTo : '/dashboard', pathMatch : 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})

export class AppRoutingModule {


}
