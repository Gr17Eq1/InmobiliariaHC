import {Entity, model, property, hasMany} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model()
export class Propietario extends Entity {
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

  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
