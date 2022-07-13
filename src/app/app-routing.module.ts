import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},                  // redirecionando a página principal para a página dashboard

  // Importando as rotas e criando comando para eles serem iniciadas na página somente quando forem acionadas, ou seja a página carregara mais rápido e não vai adicionar todas as informações no console.

  {
    path: 'dashboard',
    loadChildren: () =>
    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
    import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },

  // comando direcionar o usuário para umapágina de erro!
  {
    path: '**',
    component: PageNotFoundComponent,
  }



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})


export class AppRoutingModule { }
