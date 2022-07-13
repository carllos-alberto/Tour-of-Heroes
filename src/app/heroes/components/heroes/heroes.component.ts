
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.mode'; // Importando a inteface do model para pode utiliza-la
import { HeroService } from '../../../core/services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
/*   hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };
 */

displayedColumns: string[]= ['id', 'name'];
heroes: Hero[] = [];

constructor(private heroService: HeroService) {

}
ngOnInit(): void {
    this.getHeroes();
}

getHeroes(): void {
this.heroService.getHeroes().subscribe(
  (heroes) => (this.heroes = heroes)

);
}

}
