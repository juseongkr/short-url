import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ShortController } from './short.controller';
import { ShortRepository } from './short.repository';
import { ShortService } from './short.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShortRepository]),
    AuthModule,
  ],
  controllers: [ShortController],
  providers: [ShortService],
})
export class ShortModule {}
