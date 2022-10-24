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
    required: true,
  })
  contrado_alquiler: string;

  @property({
    type: 'number',
    required: true,
  })
  fecha: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estado_alquiler: boolean;

  @property({
    type: 'string',
  })
  solictudId?: string;

  @hasMany(() => Codeudor)
  codeudors: Codeudor[];

  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
