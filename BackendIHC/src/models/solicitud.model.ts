import {Entity, model, property, hasOne} from '@loopback/repository';
import {Venta} from './venta.model';
import {Alquiler} from './alquiler.model';

@model()
export class Solicitud extends Entity {
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
  estado: string;

  @property({
    type: 'string',
  })
  comentarios?: string;

  @property({
    type: 'string',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @hasOne(() => Venta)
  venta: Venta;

  @hasOne(() => Alquiler)
  alquiler: Alquiler;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
