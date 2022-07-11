import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero.mode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[]=[];

  constructor(private hereoService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.hereoService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5 )) /* O slice pega a posição do vetor, nesse caso da posição 0 até a 4 */
  }

}
