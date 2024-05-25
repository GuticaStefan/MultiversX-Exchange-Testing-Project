import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DelegationService } from './delegation.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('delegation')
export class DelegationController {
  constructor(private readonly delegationService: DelegationService) {}

  @Get('/delegation')
  async getDelegationStatistics(): Promise<any> {
    return this.delegationService.getDelegationStatistics();
  }

  @Get('/delegation-legacy')
  async getLegacyDelegationStatistics(): Promise<any> {
    return this.delegationService.getLegacyDelegationStatistics();
  }
}

