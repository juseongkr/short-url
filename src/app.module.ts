import { Module } from '@nestjs/common';
import { ShortModule } from './short/short.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ShortModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
