
import { Component, OnInit } from '@angular/core';
/* import { HEROES } from '../mock-heroes'; */
import { Hero } from './hero.mode'; // Importando a inteface do model para pode utiliza-la
import { HeroService } from '../hero.service';


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



constructor(private heroservice: HeroService, ) {

}

ngOnInit(): void {
    this.getHeroes();
}


getHeroes(): void {
this.heroservice.getHeroes().subscribe(
  (heroes) => (this.heroes = heroes)

);
}






}
