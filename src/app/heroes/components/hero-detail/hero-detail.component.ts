import { HeroService } from '../../../core/services/hero.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../../core/models/hero.mode';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']

})

export class HeroDetailComponent implements OnInit {

  hero!: Hero;

constructor(
  private heroService: HeroService,
  private location: Location,       /* Permite interagir com o histórico do Browser */
  private route: ActivatedRoute     /* Segura as informações no momento em que a rota está */
  ){

}


ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id =  Number (this.route.snapshot.paramMap.get('id'));      /* Pega o número do ID no endereço */

  this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
}

goBack(): void {
 this.location.back();
}

}