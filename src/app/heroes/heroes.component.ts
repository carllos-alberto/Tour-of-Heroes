import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './hero.mode'; // Importando a inteface do model para pode utiliza-la

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
/*   hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };
 */

heroes = HEROES;
selectedHero?: Hero;




onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


}
