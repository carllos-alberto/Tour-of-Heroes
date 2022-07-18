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
  isEditing!: boolean;

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
  const paramId =   (this.route.snapshot.paramMap.get('id'));      /* Pega o número do ID na barra de endereço */

  if (paramId === 'new') {
    this.isEditing = false;
    this.hero = { name: ''} as Hero;
  } else {
    this.isEditing = true;
    const id = Number(paramId);
    this.heroService.getOne(id).subscribe((hero) => (this.hero = hero));
  }
}

goBack(): void {
 this.location.back();
}


isFormValid(): boolean {
  return !!this.hero.name.trim();      /* Método para deixar o salve desabilitado caso não tenha digitos nele */
}
/*
se vier vazio = ''
negar o vazio 1x = ! => true
negar o vazio 2x = !! => false
*/

create(): void {
  this.heroService.create(this.hero).subscribe(() => this.goBack());
}


update(): void {
  this.heroService.update(this.hero).subscribe(() => this.goBack());
}




}
