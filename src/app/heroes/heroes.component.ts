import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.mode';     // Importando a inteface do model para pode utiliza-la

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero ={
    id: 1,
    name: 'Wolverine'

  }


  constructor() { }

  ngOnInit(): void {
  }

}
