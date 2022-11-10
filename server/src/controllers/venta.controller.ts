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
import {Venta} from '../models';
import {VentaRepository} from '../repositories';

export class VentaController {
  constructor(
    @repository(VentaRepository)
    public ventaRepository : VentaRepository,
  ) {}

  @post('/ventas')
  @response(200, {
    description: 'Venta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Venta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Venta, {
            title: 'NewVenta',
            exclude: ['id'],
          }),
        },
      },
    })
    venta: Omit<Venta, 'id'>,
  ): Promise<Venta> {
    return this.ventaRepository.create(venta);
  }

  @get('/ventas/count')
  @response(200, {
    description: 'Venta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Venta) where?: Where<Venta>,
  ): Promise<Count> {
    return this.ventaRepository.count(where);
  }

  @get('/ventas')
  @response(200, {
    description: 'Array of Venta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Venta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Venta) filter?: Filter<Venta>,
  ): Promise<Venta[]> {
    return this.ventaRepository.find(filter);
  }

  @patch('/ventas')
  @response(200, {
    description: 'Venta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Venta, {partial: true}),
        },
      },
    })
    venta: Venta,
    @param.where(Venta) where?: Where<Venta>,
  ): Promise<Count> {
    return this.ventaRepository.updateAll(venta, where);
  }

  @get('/ventas/{id}')
  @response(200, {
    description: 'Venta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Venta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Venta, {exclude: 'where'}) filter?: FilterExcludingWhere<Venta>
  ): Promise<Venta> {
    return this.ventaRepository.findById(id, filter);
  }

  @patch('/ventas/{id}')
  @response(204, {
    description: 'Venta PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Venta, {partial: true}),
        },
      },
    })
    venta: Venta,
  ): Promise<void> {
    await this.ventaRepository.updateById(id, venta);
  }

  @put('/ventas/{id}')
  @response(204, {
    description: 'Venta PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() venta: Venta,
  ): Promise<void> {
    await this.ventaRepository.replaceById(id, venta);
  }

  @del('/ventas/{id}')
  @response(204, {
    description: 'Venta DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ventaRepository.deleteById(id);
  }
}
