import { DepotModule } from '@domain/depot';
import { PartnerModule } from '@domain/partner';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities';
import { UserController } from './user.controller';
import { UserInterceptor } from './user.interceptor';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => PartnerModule), forwardRef(() => DepotModule)],
  controllers: [UserController],
  providers: [UserService, UserInterceptor],
  exports: [UserService],
})
export class UserModule {}
