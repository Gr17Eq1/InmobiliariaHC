import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Persona, PersonaRelations, Asesor, Propietario, Cliente, Administrador} from '../models';
import {AsesorRepository} from './asesor.repository';
import {PropietarioRepository} from './propietario.repository';
import {ClienteRepository} from './cliente.repository';
import {AdministradorRepository} from './administrador.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly asesor: HasOneRepositoryFactory<Asesor, typeof Persona.prototype.id>;

  public readonly propietario: HasOneRepositoryFactory<Propietario, typeof Persona.prototype.id>;

  public readonly cliente: HasOneRepositoryFactory<Cliente, typeof Persona.prototype.id>;

  public readonly administrador: HasOneRepositoryFactory<Administrador, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('PropietarioRepository') protected propietarioRepositoryGetter: Getter<PropietarioRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>,
  ) {
    super(Persona, dataSource);
    this.administrador = this.createHasOneRepositoryFactoryFor('administrador', administradorRepositoryGetter);
    this.registerInclusionResolver('administrador', this.administrador.inclusionResolver);
    this.cliente = this.createHasOneRepositoryFactoryFor('cliente', clienteRepositoryGetter);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.propietario = this.createHasOneRepositoryFactoryFor('propietario', propietarioRepositoryGetter);
    this.registerInclusionResolver('propietario', this.propietario.inclusionResolver);
    this.asesor = this.createHasOneRepositoryFactoryFor('asesor', asesorRepositoryGetter);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
  }
}
