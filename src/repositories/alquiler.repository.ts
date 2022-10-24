import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Alquiler, AlquilerRelations, Codeudor} from '../models';
import {CodeudorRepository} from './codeudor.repository';

export class AlquilerRepository extends DefaultCrudRepository<
  Alquiler,
  typeof Alquiler.prototype.id,
  AlquilerRelations
> {

  public readonly codeudors: HasManyRepositoryFactory<Codeudor, typeof Alquiler.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CodeudorRepository') protected codeudorRepositoryGetter: Getter<CodeudorRepository>,
  ) {
    super(Alquiler, dataSource);
    this.codeudors = this.createHasManyRepositoryFactoryFor('codeudors', codeudorRepositoryGetter,);
    this.registerInclusionResolver('codeudors', this.codeudors.inclusionResolver);
  }
}
