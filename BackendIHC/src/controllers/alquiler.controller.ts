import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Alquiler} from '../models';
import {AlquilerRepository} from '../repositories';

export class AlquilerController {
  constructor(
    @repository(AlquilerRepository)
    public alquilerRepository : AlquilerRepository,
  ) {}

  @post('/alquileres')
  @response(200, {
    description: 'Alquiler model instance',
    content: {'application/json': {schema: getModelSchemaRef(Alquiler)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {
            title: 'NewAlquiler',
            exclude: ['id'],
          }),
        },
      },
    })
    alquiler: Omit<Alquiler, 'id'>,
  ): Promise<Alquiler> {
    return this.alquilerRepository.create(alquiler);
  }

  @get('/alquileres/count')
  @response(200, {
    description: 'Alquiler model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Alquiler) where?: Where<Alquiler>,
  ): Promise<Count> {
    return this.alquilerRepository.count(where);
  }

  @get('/alquileres')
  @response(200, {
    description: 'Array of Alquiler model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Alquiler, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Alquiler) filter?: Filter<Alquiler>,
  ): Promise<Alquiler[]> {
    return this.alquilerRepository.find(filter);
  }

  @patch('/alquileres')
  @response(200, {
    description: 'Alquiler PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {partial: true}),
        },
      },
    })
    alquiler: Alquiler,
    @param.where(Alquiler) where?: Where<Alquiler>,
  ): Promise<Count> {
    return this.alquilerRepository.updateAll(alquiler, where);
  }

  @get('/alquileres/{id}')
  @response(200, {
    description: 'Alquiler model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Alquiler, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Alquiler, {exclude: 'where'}) filter?: FilterExcludingWhere<Alquiler>
  ): Promise<Alquiler> {
    return this.alquilerRepository.findById(id, filter);
  }

  @patch('/alquileres/{id}')
  @response(204, {
    description: 'Alquiler PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {partial: true}),
        },
      },
    })
    alquiler: Alquiler,
  ): Promise<void> {
    await this.alquilerRepository.updateById(id, alquiler);
  }

  @put('/alquileres/{id}')
  @response(204, {
    description: 'Alquiler PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() alquiler: Alquiler,
  ): Promise<void> {
    await this.alquilerRepository.replaceById(id, alquiler);
  }

  @del('/alquileres/{id}')
  @response(204, {
    description: 'Alquiler DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.alquilerRepository.deleteById(id);
  }
}
