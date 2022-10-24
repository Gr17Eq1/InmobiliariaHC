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
  Venta,
} from '../models';
import {SolictudRepository} from '../repositories';

export class SolictudVentaController {
  constructor(
    @repository(SolictudRepository) protected solictudRepository: SolictudRepository,
  ) { }

  @get('/solictuds/{id}/venta', {
    responses: {
      '200': {
        description: 'Solictud has one Venta',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Venta),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Venta>,
  ): Promise<Venta> {
    return this.solictudRepository.venta(id).get(filter);
  }

  @post('/solictuds/{id}/venta', {
    responses: {
      '200': {
        description: 'Solictud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Venta)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solictud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Venta, {
            title: 'NewVentaInSolictud',
            exclude: ['id'],
            optional: ['solictudId']
          }),
        },
      },
    }) venta: Omit<Venta, 'id'>,
  ): Promise<Venta> {
    return this.solictudRepository.venta(id).create(venta);
  }

  @patch('/solictuds/{id}/venta', {
    responses: {
      '200': {
        description: 'Solictud.Venta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Venta, {partial: true}),
        },
      },
    })
    venta: Partial<Venta>,
    @param.query.object('where', getWhereSchemaFor(Venta)) where?: Where<Venta>,
  ): Promise<Count> {
    return this.solictudRepository.venta(id).patch(venta, where);
  }

  @del('/solictuds/{id}/venta', {
    responses: {
      '200': {
        description: 'Solictud.Venta DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Venta)) where?: Where<Venta>,
  ): Promise<Count> {
    return this.solictudRepository.venta(id).delete(where);
  }
}
