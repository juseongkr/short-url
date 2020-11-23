import { Module } from '@nestjs/common';
import { ShortController } from './short.controller';
import { ShortService } from './short.service';

@Module({
  controllers: [ShortController],
  providers: [ShortService],
})
export class ShortModule {}
