import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeysService } from './keys.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('keys')
export class KeysController {
  constructor(private readonly keysService: KeysService) {}

  @Get('/keys/:key/unbond-period')
  async getUnbondingPeriod(
    @Param('key')
    key: string
  ): Promise<any> {
    return undefined;
  }
}

