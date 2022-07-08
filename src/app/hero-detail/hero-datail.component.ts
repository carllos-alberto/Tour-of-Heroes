
import { Component, Input } from "@angular/core";
import { Hero } from "../heroes/hero.mode";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.scss']

})



export class HeroDetailComponent {

 @Input()hero?: Hero;

}
