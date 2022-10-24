import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Codeudor, CodeudorRelations} from '../models';

export class CodeudorRepository extends DefaultCrudRepository<
  Codeudor,
  typeof Codeudor.prototype.id,
  CodeudorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Codeudor, dataSource);
  }
}
