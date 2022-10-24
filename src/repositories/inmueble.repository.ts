import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Solictud} from '../models';
import {SolictudRepository} from './solictud.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype.id,
  InmuebleRelations
> {

  public readonly solictuds: HasManyRepositoryFactory<Solictud, typeof Inmueble.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolictudRepository') protected solictudRepositoryGetter: Getter<SolictudRepository>,
  ) {
    super(Inmueble, dataSource);
    this.solictuds = this.createHasManyRepositoryFactoryFor('solictuds', solictudRepositoryGetter,);
    this.registerInclusionResolver('solictuds', this.solictuds.inclusionResolver);
  }
}
