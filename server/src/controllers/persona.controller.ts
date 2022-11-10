import {service} from '@loopback/core';
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
import {Persona, References} from '../models';
import {PersonaRepository} from '../repositories';
import {AuthService} from '../services';
const fetch = require('node-fetch');

export class PersonaController {
  constructor(
    @repository(PersonaRepository)
    public personaRepository: PersonaRepository,

    // Inicializamos el servicio de autenticación
    @service(AuthService)
    public authService: AuthService,
  ) {}

  // Registro de usuario
  @post('/registro')
  @response(200, {
    description: 'Persona model instance',
    content: {'application/json': {schema: getModelSchemaRef(Persona)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersona',
            exclude: ['id'],
          }),
        },
      },
    })
    persona: Omit<Persona, 'id'>,
  ): Promise<Persona | null> {
    try {
      // Asignar contraseña automáticamente
      let password = this.authService.GeneratePassword();
      persona.clave = this.authService.EncryptPassword(password);
      let p = await this.personaRepository.create(persona);

      // Notifica al usuario al correo electrónico
      // TODO: Cambiar el asunto y el cuerpo del mensaje
      let to: string = persona.email;
      let subject: string = 'ASUNTO';
      let body = `
        <h1>CUERPO DEL MENSAJE</h1>
        <p>
          Estimado <b>${persona.nombres}</b>, 
          su usuario es <b>${persona.email}</b> 
          y su contraseña es <b>${password}</b>
        </p>
      `;

      // TODO: Cambiar la URL del servidor de correo para producción
      fetch(
        `http://127.0.0.1:5000/send-email?to=${to}&subject=${subject}&body=${body}`,
      ).then((data: any) => {
        console.log(data);
      });

      return p;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @get('/personas/count')
  @response(200, {
    description: 'Persona model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Persona) where?: Where<Persona>): Promise<Count> {
    return this.personaRepository.count(where);
  }

  @get('/personas')
  @response(200, {
    description: 'Array of Persona model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Persona, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Persona) filter?: Filter<Persona>,
  ): Promise<Persona[]> {
    return this.personaRepository.find(filter);
  }

  @patch('/personas')
  @response(200, {
    description: 'Persona PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
    @param.where(Persona) where?: Where<Persona>,
  ): Promise<Count> {
    return this.personaRepository.updateAll(persona, where);
  }

  @get('/personas/{id}')
  @response(200, {
    description: 'Persona model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Persona, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Persona, {exclude: 'where'})
    filter?: FilterExcludingWhere<Persona>,
  ): Promise<Persona> {
    return this.personaRepository.findById(id, filter);
  }

  @patch('/personas/{id}')
  @response(204, {
    description: 'Persona PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
  ): Promise<void> {
    await this.personaRepository.updateById(id, persona);
  }

  @put('/personas/{id}')
  @response(204, {
    description: 'Persona PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() persona: Persona,
  ): Promise<void> {
    await this.personaRepository.replaceById(id, persona);
  }

  @del('/personas/{id}')
  @response(204, {
    description: 'Persona DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.personaRepository.deleteById(id);
  }

  /**
   * Identifica a una persona en el sistema
   *
   * @param data Un objeto con los datos de la persona
   * @returns Una persona o null
   */
  @post('/personas/inicio-sesion')
  @response(200, {
    description: 'Persona model instance',
  })
  async identificar(@requestBody() data: References): Promise<Persona | null> {
    let persona = await this.personaRepository.findOne({
      where: {
        email: data.usuario,
        clave: data.clave,
      },
    });
    return persona;
  }
}
