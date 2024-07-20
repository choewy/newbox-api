import { NumberPKParamDTO } from '@common';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { PartnerDTO, PartnerListDTO, SetPartnerDTO } from './dtos';
import { PartnerService } from './partner.service';

@ApiTags('화주사')
@Controller('partners')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get()
  @ApiOperation({ summary: '화주사 목록 조회' })
  @ApiOkResponse({ type: PartnerListDTO })
  async getList() {
    return new PartnerListDTO(...(await this.partnerService.getList()));
  }

  @Post()
  @ApiOperation({ summary: '화주사 등록' })
  @ApiCreatedResponse()
  async create(@Body() body: SetPartnerDTO) {
    return this.partnerService.create(body);
  }

  @Get(':id(\\d+)')
  @ApiOperation({ summary: '화주사 단일 조회' })
  @ApiOkResponse({ type: PartnerDTO })
  async getById(@Param() param: NumberPKParamDTO) {
    return new PartnerDTO(await this.partnerService.getById(param.id));
  }

  @Patch(':id(\\d+)')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: '화주사 정보 수정' })
  @ApiNoContentResponse()
  async update(@Param() param: NumberPKParamDTO, @Body() body: SetPartnerDTO) {
    return this.partnerService.update(param.id, body);
  }

  @Delete(':id(\\d+)')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: '화주사 삭제' })
  @ApiNoContentResponse()
  async delete(@Param() param: NumberPKParamDTO) {
    return this.partnerService.delete(param.id);
  }
}