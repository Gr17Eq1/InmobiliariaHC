import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Alquiler,
  Codeudor,
} from '../models';
import {AlquilerRepository} from '../repositories';

export class AlquilerCodeudorController {
  constructor(
    @repository(AlquilerRepository) protected alquilerRepository: AlquilerRepository,
  ) { }

  @get('/alquilers/{id}/codeudors', {
    responses: {
      '200': {
        description: 'Array of Alquiler has many Codeudor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Codeudor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Codeudor>,
  ): Promise<Codeudor[]> {
    return this.alquilerRepository.codeudores(id).find(filter);
  }

  @post('/alquilers/{id}/codeudors', {
    responses: {
      '200': {
        description: 'Alquiler model instance',
        content: {'application/json': {schema: getModelSchemaRef(Codeudor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Alquiler.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {
            title: 'NewCodeudorInAlquiler',
            exclude: ['id'],
            optional: ['alquilerId']
          }),
        },
      },
    }) codeudor: Omit<Codeudor, 'id'>,
  ): Promise<Codeudor> {
    return this.alquilerRepository.codeudores(id).create(codeudor);
  }

  @patch('/alquilers/{id}/codeudors', {
    responses: {
      '200': {
        description: 'Alquiler.Codeudor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {partial: true}),
        },
      },
    })
    codeudor: Partial<Codeudor>,
    @param.query.object('where', getWhereSchemaFor(Codeudor)) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.alquilerRepository.codeudores(id).patch(codeudor, where);
  }

  @del('/alquilers/{id}/codeudors', {
    responses: {
      '200': {
        description: 'Alquiler.Codeudor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Codeudor)) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.alquilerRepository.codeudores(id).delete(where);
  }
}
