import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.mode';

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
    this.hereoService.getAll().subscribe(heroes => this.heroes = heroes.slice(1, 5 )) /* O slice pega a posição do vetor, nesse caso da posição 0 até a 4 */
  }

}
