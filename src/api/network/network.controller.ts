import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NetworkService } from './network.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('network')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) {}

  @Get('/constants')
  async getNetworkConstants(): Promise<any> {
    return undefined;
  }

  @Get('/economics')
  async getNetworkEconomics(): Promise<any> {
    return undefined;
  }

  @Get('/stats')
  async getNetworkStatistics(): Promise<any> {
    return undefined;
  }

  @Get('/about')
  async getAboutInfo(): Promise<any> {
    return undefined;
  }
}

