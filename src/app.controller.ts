import { VersionDTO } from '@common';
import { SkipAuthCheck } from '@domain';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('App')
@SkipAuthCheck()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '버전 확인' })
  @ApiOkResponse({ type: VersionDTO })
  getVersion() {
    return new VersionDTO(this.appService.getVersion());
  }
}
