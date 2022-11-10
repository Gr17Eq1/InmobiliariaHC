import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { VentaInmuebleComponent } from './venta-inmueble/venta-inmueble.component';
import { AlquilerInmuebleComponent } from './alquiler-inmueble/alquiler-inmueble.component';
import { InvitacionAsesorComponent } from './invitacion-asesor/invitacion-asesor.component';


@NgModule({
  declarations: [
    VentaInmuebleComponent,
    AlquilerInmuebleComponent,
    InvitacionAsesorComponent
  ],
  imports: [
    CommonModule,
    ProcesosRoutingModule
  ]
})
export class ProcesosModule { }
