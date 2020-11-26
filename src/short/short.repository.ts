import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Short } from './short.entity';

@EntityRepository(Short)
export class ShortRepository extends Repository<Short> {
  private logger = new Logger('ShortRepository');
}
