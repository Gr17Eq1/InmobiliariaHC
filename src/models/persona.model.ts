import {Entity, model, property, hasOne} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Propietario} from './propietario.model';
import {Administrador} from './administrador.model';
import {Cliente} from './cliente.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @hasOne(() => Asesor)
  asesor: Asesor;

  @hasOne(() => Propietario)
  propietario: Propietario;

  @hasOne(() => Administrador)
  administrador: Administrador;

  @hasOne(() => Cliente)
  cliente: Cliente;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
