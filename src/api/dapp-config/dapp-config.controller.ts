import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DappConfigService } from './dapp-config.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('dapp')
export class DappConfigController {
  constructor(private readonly dappConfigService: DappConfigService) {}

  @Get('/dapp/config')
  async getDappConfig(): Promise<any> {
    return this.dappConfigService.getDappConfig();
  }
}
