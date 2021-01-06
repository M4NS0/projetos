import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataAtualComponent } from './telas/data-atual/data-atual.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CronometroComponent } from './telas/cronometro/cronometro.component';
import { CronComponent } from './telas/cron/cron.component';
import { ParciaisComponent } from './telas/cron/parciais/parciais.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DataAtualComponent,
    NavbarComponent,
    CronometroComponent,
    CronComponent,
    ParciaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
