import {Entity, model, property, hasOne} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Propietario} from './propietario.model';
import {Cliente} from './cliente.model';
import {Administrador} from './administrador.model';

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
    required: false,
  })
  clave?: string;

  @property({
    type: 'string',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'string',
    required: true,
  })
  currentuser: string;

  @hasOne(() => Asesor)
  asesor: Asesor;

  @hasOne(() => Propietario)
  propietario: Propietario;

  @hasOne(() => Cliente)
  cliente: Cliente;

  @hasOne(() => Administrador)
  administrador: Administrador;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
