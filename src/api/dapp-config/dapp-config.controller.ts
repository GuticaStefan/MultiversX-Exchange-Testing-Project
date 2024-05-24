import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DappConfigService } from './dapp-config.service';

@Controller('dapp-config')
export class DappConfigController {
  constructor(private readonly dappConfigService: DappConfigService) {}

}
