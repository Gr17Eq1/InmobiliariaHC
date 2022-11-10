import {Entity, model, property, hasMany} from '@loopback/repository';
import {Codeudor} from './codeudor.model';

@model()
export class Alquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  solicitudId?: string;

  @hasMany(() => Codeudor)
  codeudores: Codeudor[];

  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
