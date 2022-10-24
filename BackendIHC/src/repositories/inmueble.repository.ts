import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype.id,
  InmuebleRelations
> {
  public readonly solicituds: HasManyRepositoryFactory<
    Solicitud,
    typeof Inmueble.prototype.id
  >;

  public readonly solicitudes: HasManyRepositoryFactory<
    Solicitud,
    typeof Inmueble.prototype.id
  >;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
    @repository.getter('SolicitudRepository')
    protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Inmueble, dataSource);
    this.solicitudes = this.createHasManyRepositoryFactoryFor(
      'solicitudes',
      solicitudRepositoryGetter,
    );
    this.registerInclusionResolver(
      'solicitudes',
      this.solicitudes.inclusionResolver,
    );
  }
}
