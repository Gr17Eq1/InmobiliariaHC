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
import {Codeudor} from '../models';
import {CodeudorRepository} from '../repositories';

export class CodeudorController {
  constructor(
    @repository(CodeudorRepository)
    public codeudorRepository : CodeudorRepository,
  ) {}

  @post('/codeudores')
  @response(200, {
    description: 'Codeudor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Codeudor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {
            title: 'NewCodeudor',
            exclude: ['id'],
          }),
        },
      },
    })
    codeudor: Omit<Codeudor, 'id'>,
  ): Promise<Codeudor> {
    return this.codeudorRepository.create(codeudor);
  }

  @get('/codeudores/count')
  @response(200, {
    description: 'Codeudor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Codeudor) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.codeudorRepository.count(where);
  }

  @get('/codeudores')
  @response(200, {
    description: 'Array of Codeudor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Codeudor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Codeudor) filter?: Filter<Codeudor>,
  ): Promise<Codeudor[]> {
    return this.codeudorRepository.find(filter);
  }

  @patch('/codeudores')
  @response(200, {
    description: 'Codeudor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {partial: true}),
        },
      },
    })
    codeudor: Codeudor,
    @param.where(Codeudor) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.codeudorRepository.updateAll(codeudor, where);
  }

  @get('/codeudores/{id}')
  @response(200, {
    description: 'Codeudor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Codeudor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Codeudor, {exclude: 'where'}) filter?: FilterExcludingWhere<Codeudor>
  ): Promise<Codeudor> {
    return this.codeudorRepository.findById(id, filter);
  }

  @patch('/codeudores/{id}')
  @response(204, {
    description: 'Codeudor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {partial: true}),
        },
      },
    })
    codeudor: Codeudor,
  ): Promise<void> {
    await this.codeudorRepository.updateById(id, codeudor);
  }

  @put('/codeudores/{id}')
  @response(204, {
    description: 'Codeudor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() codeudor: Codeudor,
  ): Promise<void> {
    await this.codeudorRepository.replaceById(id, codeudor);
  }

  @del('/codeudores/{id}')
  @response(204, {
    description: 'Codeudor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.codeudorRepository.deleteById(id);
  }
}
