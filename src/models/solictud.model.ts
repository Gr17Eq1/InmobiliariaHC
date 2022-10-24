import {Entity, model, property, hasOne} from '@loopback/repository';
import {Venta} from './venta.model';
import {Alquiler} from './alquiler.model';

@model()
export class Solictud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado_solic: boolean;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @hasOne(() => Venta)
  venta: Venta;

  @hasOne(() => Alquiler)
  alquiler: Alquiler;

  constructor(data?: Partial<Solictud>) {
    super(data);
  }
}

export interface SolictudRelations {
  // describe navigational properties here
}

export type SolictudWithRelations = Solictud & SolictudRelations;
