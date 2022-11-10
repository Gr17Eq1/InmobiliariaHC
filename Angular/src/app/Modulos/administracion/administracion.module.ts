import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { EliminarSolicitudComponent } from './solicitudes/eliminar-solicitud/eliminar-solicitud.component';
import { CrearSolicitudComponent } from './solicitudes/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/editar-solicitud/editar-solicitud.component';
import { BuscarSolicitudComponent } from './solicitudes/buscar-solicitud/buscar-solicitud.component';
import { CrearVentaComponent } from './solicitudes/venta/crear-venta/crear-venta.component';
import { EditarVentaComponent } from './solicitudes/venta/editar-venta/editar-venta.component';
import { EliminarVentaComponent } from './solicitudes/venta/eliminar-venta/eliminar-venta.component';
import { BuscarVentaComponent } from './solicitudes/venta/buscar-venta/buscar-venta.component';
import { BuscarAlquilerComponent } from './solicitudes/alquiler/buscar-alquiler/buscar-alquiler.component';
import { CrearAlquilerComponent } from './solicitudes/alquiler/crear-alquiler/crear-alquiler.component';
import { EditarAlquilerComponent } from './solicitudes/alquiler/editar-alquiler/editar-alquiler.component';
import { EliminarAlquilerComponent } from './solicitudes/alquiler/eliminar-alquiler/eliminar-alquiler.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    BuscarInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    EliminarSolicitudComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    BuscarSolicitudComponent,
    CrearVentaComponent,
    EditarVentaComponent,
    EliminarVentaComponent,
    BuscarVentaComponent,
    BuscarAlquilerComponent,
    CrearAlquilerComponent,
    EditarAlquilerComponent,
    EliminarAlquilerComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
