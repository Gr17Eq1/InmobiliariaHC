import {Entity, model, property, hasMany} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model()
export class Administrador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;
