import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero.mode';
import { HEROES } from './mock-heroes';



@Injectable({
  providedIn: 'root'
})
export class HeroService {


getHeroes(): Observable<Hero[]> {
// Criando variável para observable
const heroes = of(HEROES);  /* o OF vai transforma a lista em um observable */


  return heroes;
}


}
