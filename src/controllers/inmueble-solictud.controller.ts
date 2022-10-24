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
  Inmueble,
  Solictud,
} from '../models';
import {InmuebleRepository} from '../repositories';

export class InmuebleSolictudController {
  constructor(
    @repository(InmuebleRepository) protected inmuebleRepository: InmuebleRepository,
  ) { }

  @get('/inmuebles/{id}/solictuds', {
    responses: {
      '200': {
        description: 'Array of Inmueble has many Solictud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solictud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solictud>,
  ): Promise<Solictud[]> {
    return this.inmuebleRepository.solictuds(id).find(filter);
  }

  @post('/inmuebles/{id}/solictuds', {
    responses: {
      '200': {
        description: 'Inmueble model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solictud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Inmueble.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solictud, {
            title: 'NewSolictudInInmueble',
            exclude: ['id'],
            optional: ['inmuebleId']
          }),
        },
      },
    }) solictud: Omit<Solictud, 'id'>,
  ): Promise<Solictud> {
    return this.inmuebleRepository.solictuds(id).create(solictud);
  }

  @patch('/inmuebles/{id}/solictuds', {
    responses: {
      '200': {
        description: 'Inmueble.Solictud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solictud, {partial: true}),
        },
      },
    })
    solictud: Partial<Solictud>,
    @param.query.object('where', getWhereSchemaFor(Solictud)) where?: Where<Solictud>,
  ): Promise<Count> {
    return this.inmuebleRepository.solictuds(id).patch(solictud, where);
  }

  @del('/inmuebles/{id}/solictuds', {
    responses: {
      '200': {
        description: 'Inmueble.Solictud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solictud)) where?: Where<Solictud>,
  ): Promise<Count> {
    return this.inmuebleRepository.solictuds(id).delete(where);
  }
}
