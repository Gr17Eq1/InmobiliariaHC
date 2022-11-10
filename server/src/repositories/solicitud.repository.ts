import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Venta, Alquiler} from '../models';
import {VentaRepository} from './venta.repository';
import {AlquilerRepository} from './alquiler.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly venta: HasOneRepositoryFactory<Venta, typeof Solicitud.prototype.id>;

  public readonly alquiler: HasOneRepositoryFactory<Alquiler, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VentaRepository') protected ventaRepositoryGetter: Getter<VentaRepository>, @repository.getter('AlquilerRepository') protected alquilerRepositoryGetter: Getter<AlquilerRepository>,
  ) {
    super(Solicitud, dataSource);
    this.alquiler = this.createHasOneRepositoryFactoryFor('alquiler', alquilerRepositoryGetter);
    this.registerInclusionResolver('alquiler', this.alquiler.inclusionResolver);
    this.venta = this.createHasOneRepositoryFactoryFor('venta', ventaRepositoryGetter);
    this.registerInclusionResolver('venta', this.venta.inclusionResolver);
  }
}
