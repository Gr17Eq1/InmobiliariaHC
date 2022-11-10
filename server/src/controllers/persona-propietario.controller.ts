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
  Persona,
  Propietario,
} from '../models';
import {PersonaRepository} from '../repositories';

export class PersonaPropietarioController {
  constructor(
    @repository(PersonaRepository) protected personaRepository: PersonaRepository,
  ) { }

  @get('/personas/{id}/propietario', {
    responses: {
      '200': {
        description: 'Persona has one Propietario',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Propietario),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Propietario>,
  ): Promise<Propietario> {
    return this.personaRepository.propietario(id).get(filter);
  }

  @post('/personas/{id}/propietario', {
    responses: {
      '200': {
        description: 'Persona model instance',
        content: {'application/json': {schema: getModelSchemaRef(Propietario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Persona.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {
            title: 'NewPropietarioInPersona',
            exclude: ['id'],
            optional: ['personaId']
          }),
        },
      },
    }) propietario: Omit<Propietario, 'id'>,
  ): Promise<Propietario> {
    return this.personaRepository.propietario(id).create(propietario);
  }

  @patch('/personas/{id}/propietario', {
    responses: {
      '200': {
        description: 'Persona.Propietario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Propietario, {partial: true}),
        },
      },
    })
    propietario: Partial<Propietario>,
    @param.query.object('where', getWhereSchemaFor(Propietario)) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.personaRepository.propietario(id).patch(propietario, where);
  }

  @del('/personas/{id}/propietario', {
    responses: {
      '200': {
        description: 'Persona.Propietario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Propietario)) where?: Where<Propietario>,
  ): Promise<Count> {
    return this.personaRepository.propietario(id).delete(where);
  }
}
