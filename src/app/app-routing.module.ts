import { HeroDetailComponent } from './hero-detail/hero-datail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},                  // redirecionando a página principal para a página dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
]






@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})


export class AppRoutingModule { }
