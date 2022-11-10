import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { RegistroComponent } from './general/registro/registro.component';
import { LoginComponent } from './general/login/login.component';
import { CambioPassComponent } from './general/cambio-pass/cambio-pass.component';
import { RecuperarPassComponent } from './general/recuperar-pass/recuperar-pass.component';
import { CrearUserComponent } from './usuarios/crear-user/crear-user.component';
import { EditarUserComponent } from './usuarios/editar-user/editar-user.component';
import { EliminarUserComponent } from './usuarios/eliminar-user/eliminar-user.component';
import { BuscarUserComponent } from './usuarios/buscar-user/buscar-user.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './roles/eliminar-rol/eliminar-rol.component';
import { BuscarRolComponent } from './roles/buscar-rol/buscar-rol.component';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    CambioPassComponent,
    RecuperarPassComponent,
    CrearUserComponent,
    EditarUserComponent,
    EliminarUserComponent,
    BuscarUserComponent,
    CrearRolComponent,
    EditarRolComponent,
    EliminarRolComponent,
    BuscarRolComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
