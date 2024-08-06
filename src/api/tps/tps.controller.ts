import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TpsService } from './tps.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('tps')
export class TpsController {
  constructor(private readonly tpsService: TpsService) {}

  @Get('/tps/latest')
  async getLatestTpsInfo(): Promise<any> {
    return undefined;
  }

  @Get('/tps/latest/:frequency')
  async getLatestTpsInfoWithFrequency(
    @Param('frequency') frequency: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tps/history')
  async getTpsHistoryInfo(): Promise<any> {
    return undefined;
  }

  @Get('/tps/history/:interval')
  async getTpsHistoryInfoWithInterval(
    @Param('interval') interval: string
  ): Promise<any> {
    return undefined;
  }
}
