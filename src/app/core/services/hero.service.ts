import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL).pipe(
    tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`))

  );
}

// GET /heroes/id
getOne(id: number): Observable<Hero>{
  return this.http.get<Hero>(`${this.heroesURL}/${id}`).pipe(                           // o pipe aqui representa a mensagem que será executada
    tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`))
  );
}


// POST /Heroes
  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesURL, hero).pipe(
      tap((hero) => this.log(`created ${this.descAttributes(hero)}`))
    );

  }


//Put /heores/id
update(hero: Hero): Observable<Hero>{
  return this.http.put<Hero>(`${this.heroesURL}/${hero.id}`, hero).pipe(
    tap((hero) => this.log(`updated ${this.descAttributes(hero)}`))
    );
}

private log(message: string): void {
  this.messageService.add(`HeroService: ${message}`);
}


private descAttributes(hero: Hero): string {
  return `Hero ID=${hero.id} and Name=${hero.name}`;
}

}







/*
  GET: Obter os dados             /heroes/id
  PUT/PATCH: alterar o dado       /heroes/id
  POST: Criar um novo dado        /heroes
  DELETE: excluir um dado         /heroes/id




*/
