import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraficaRoutingModule } from './grafica-routing.module';
import { BarraComponent } from './pages/barra/barra.component';
import { BarraDobleComponent } from './pages/barra-doble/barra-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';


@NgModule({
  declarations: [
    BarraComponent,
    BarraDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficaRoutingModule,
    NgChartsModule
  ]
})
export class GraficaModule { }
