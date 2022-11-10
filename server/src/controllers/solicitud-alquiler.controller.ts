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
  Solicitud,
  Alquiler,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudAlquilerController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solicitud has one Alquiler',
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
    return this.solicitudRepository.alquiler(id).get(filter);
  }

  @post('/solicituds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Alquiler)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alquiler, {
            title: 'NewAlquilerInSolicitud',
            exclude: ['id'],
            optional: ['solicitudId']
          }),
        },
      },
    }) alquiler: Omit<Alquiler, 'id'>,
  ): Promise<Alquiler> {
    return this.solicitudRepository.alquiler(id).create(alquiler);
  }

  @patch('/solicituds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solicitud.Alquiler PATCH success count',
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
    return this.solicitudRepository.alquiler(id).patch(alquiler, where);
  }

  @del('/solicituds/{id}/alquiler', {
    responses: {
      '200': {
        description: 'Solicitud.Alquiler DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Alquiler)) where?: Where<Alquiler>,
  ): Promise<Count> {
    return this.solicitudRepository.alquiler(id).delete(where);
  }
}
