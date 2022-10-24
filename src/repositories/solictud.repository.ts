import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solictud, SolictudRelations, Venta, Alquiler} from '../models';
import {VentaRepository} from './venta.repository';
import {AlquilerRepository} from './alquiler.repository';

export class SolictudRepository extends DefaultCrudRepository<
  Solictud,
  typeof Solictud.prototype.id,
  SolictudRelations
> {

  public readonly venta: HasOneRepositoryFactory<Venta, typeof Solictud.prototype.id>;

  public readonly alquiler: HasOneRepositoryFactory<Alquiler, typeof Solictud.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VentaRepository') protected ventaRepositoryGetter: Getter<VentaRepository>, @repository.getter('AlquilerRepository') protected alquilerRepositoryGetter: Getter<AlquilerRepository>,
  ) {
    super(Solictud, dataSource);
    this.alquiler = this.createHasOneRepositoryFactoryFor('alquiler', alquilerRepositoryGetter);
    this.registerInclusionResolver('alquiler', this.alquiler.inclusionResolver);
    this.venta = this.createHasOneRepositoryFactoryFor('venta', ventaRepositoryGetter);
    this.registerInclusionResolver('venta', this.venta.inclusionResolver);
  }
}
