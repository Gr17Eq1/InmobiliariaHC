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
  Solictud,
  Alquiler,
} from '../models';
import {SolictudRepository} from '../repositories';

export class SolictudAlquilerController {
  constructor(
    @repository(SolictudRepository) protected solictudRepository: SolictudRepository,
  ) { }

  @get('/solictuds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solictud has one Alquiler',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Alquiler),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Alquiler>,
  ): Promise<Alquiler> {
    return this.solictudRepository.alquiler(id).get(filter);
  }

  @post('/solictuds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solictud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Alquiler)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solictud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {
            title: 'NewAlquilerInSolictud',
            exclude: ['id'],
            optional: ['solictudId']
          }),
        },
      },
    }) alquiler: Omit<Alquiler, 'id'>,
  ): Promise<Alquiler> {
    return this.solictudRepository.alquiler(id).create(alquiler);
  }

  @patch('/solictuds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solictud.Alquiler PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {partial: true}),
        },
      },
    })
    alquiler: Partial<Alquiler>,
    @param.query.object('where', getWhereSchemaFor(Alquiler)) where?: Where<Alquiler>,
  ): Promise<Count> {
    return this.solictudRepository.alquiler(id).patch(alquiler, where);
  }

  @del('/solictuds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solictud.Alquiler DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Alquiler)) where?: Where<Alquiler>,
  ): Promise<Count> {
    return this.solictudRepository.alquiler(id).delete(where);
  }
}
