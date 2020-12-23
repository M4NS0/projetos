import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CronometroComponent } from './telas/cronometro/cronometro.component';
import { DataAtualComponent } from './telas/data-atual/data-atual.component';
import { CronComponent } from  './telas/cron/cron.component';



const routes: Routes = [
  {path: 'data-hora-atual', component: DataAtualComponent },
  {path: '', redirectTo:'data-hora-atual' , pathMatch: 'full'},
  {path: 'cronometro', component: CronometroComponent },
  {path: 'cron', component: CronComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
