import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solictud} from './solictud.model';

@model()
export class Inmueble extends Entity {
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
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  porc_part: number;

  @property({
    type: 'string',
    required: true,
  })
  oferta: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  link_youtube: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  propietarioId?: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  administradorId?: string;

  @hasMany(() => Solictud)
  solictuds: Solictud[];

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
