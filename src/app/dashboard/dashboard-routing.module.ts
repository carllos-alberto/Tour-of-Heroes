
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [

  { path: '', component: DashboardComponent }, /*  O caminho ficará vazio, pois ele será chamado no Routing raiz */

]



@NgModule({
  imports: [RouterModule.forChild(routes)],         /* Aqui eu utilizo o forchiil, ou seja ele é dependente do Root, que está na raiz */

  exports: [RouterModule]
})


export class DashboardRoutingModule { }
