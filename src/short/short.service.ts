import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Short } from './short.entity';
import { ShortRepository } from './short.repository';

@Injectable()
export class ShortService {
  constructor(
    @InjectRepository(ShortRepository)
    private shortRepository: ShortRepository,
  ) {}
}
