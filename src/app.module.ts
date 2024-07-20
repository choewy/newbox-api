import { ConfigurationModule, GloablSerializeInterceptor, GlobalValidationPipe, GlobalExceptionFilter } from '@core';
import { CourierCompanyModule, DepotModule } from '@domain';
import { DatabaseModule, LoggerModule, RedisModule, RequestContextModule } from '@infra';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigurationModule.forRoot(),
    RequestContextModule.forRoot(),
    LoggerModule.forRoot(),
    DatabaseModule.forRoot(),
    RedisModule.forRoot(),
    CourierCompanyModule,
    DepotModule,
  ],
  controllers: [AppController],
  providers: [GloablSerializeInterceptor, GlobalValidationPipe, GlobalExceptionFilter, AppService],
})
export class AppModule {}
