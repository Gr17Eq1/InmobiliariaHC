import {Entity, model, property} from '@loopback/repository';

@model()
export class Codeudor extends Entity {
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
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  carta_laboral: string;

  @property({
    type: 'string',
  })
  alquilerId?: string;

  constructor(data?: Partial<Codeudor>) {
    super(data);
  }
}

export interface CodeudorRelations {
  // describe navigational properties here
}

export type CodeudorWithRelations = Codeudor & CodeudorRelations;
