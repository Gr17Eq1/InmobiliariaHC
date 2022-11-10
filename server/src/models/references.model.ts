import {Model, model, property} from '@loopback/repository';

@model()
export class References extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  email?: any;


  constructor(data?: Partial<References>) {
    super(data);
  }
}

export interface ReferencesRelations {
  // describe navigational properties here
}

export type ReferencesWithRelations = References & ReferencesRelations;
