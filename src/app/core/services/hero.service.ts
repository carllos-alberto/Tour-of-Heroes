import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { Hero } from '../models/hero.mode';
/* import { HEROES } from './mock-heroes'; */

@Injectable({
  providedIn: 'root'
})
export class HeroService {
private heroesURL = `${environment.baseUrl}/heroes`;


// Adicionando um serviço, dentro de outro serviço
constructor(
  private messageService: MessageService,
  private http: HttpClient,
  ){

}

// GET /heroes
getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL).pipe(
    tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`))
    
  );

// Criando variável para observable
/* const heroes = of(HEROES); */  /* o OF vai transforma a lista HEROES em um observable */
// Adicionando mensagem ao serviço HeroService
/* this.log('fetched heroes');
  return heroes; */
}



// GET /heroes/id
getHero(id: number): Observable<Hero>{
  return this.http.get<Hero>(`${this.heroesURL}/${id}`).pipe(
    tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
  );

 /*  const hero = HEROES.find(hero => hero.id === id)!; */       /* O find vai percorrer cada item de HERORES e  quando a condição for verdadeira ele retorna-rá a informação */
  /* this.log(`fetched id=${id}`);
  return of(hero); */
}

private log(message: string): void {
  this.messageService.add(`HeroService: ${message}`)
}

}


/*
  GET: Obter os dados             /heroes/id
  PUT/PATCH: alterar o dado       /heroes/id
  POST: Criar um novo dado        /heroes
  DELETE: excluir um dado         /heroes/id




*/
