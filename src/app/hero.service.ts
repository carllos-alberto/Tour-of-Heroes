import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero.mode';
import { HEROES } from './mock-heroes';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

// Adicionando um serviço, dentro de outro serviço
constructor(private messageService: MessageService) {

}




getHeroes(): Observable<Hero[]> {
// Criando variável para observable
const heroes = of(HEROES);  /* o OF vai transforma a lista HEROES em um observable */

// Adicionando mensagem ao serviço HeroService
this.messageService.add('HeroService: fetched heroes');

  return heroes;
}

getHero(id: number): Observable<Hero>{
  const hero = HEROES.find(hero => hero.id === id)!;       /* O find vai percorrer cada item de HERORES e  quando a condição for verdadeira ele retorna-rá a informação */

  this.messageService.add(`HeroService: fetched id=${id}`);
  return of(hero);
}



}
