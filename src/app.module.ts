import { ConfigurationModule } from '@core';
import { DatabaseModule, RedisModule } from '@infra';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigurationModule.forRoot(), DatabaseModule.forRoot(), RedisModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
