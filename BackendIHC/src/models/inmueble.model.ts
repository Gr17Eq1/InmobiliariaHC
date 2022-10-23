import {Entity, model, property} from '@loopback/repository';

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
    type: 'string',
    required: true,
  })
  participacion: string;

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
  youtube: string;
  
  @property({
    type: 'string',
    required: true,
  })
  estado: string;
  
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


  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
