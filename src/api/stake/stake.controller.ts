import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakeService } from './stake.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('stake')
export class StakeController {
  constructor(private readonly stakeService: StakeService) {}

  @Get('/stake')
  async getStake(): Promise<any> {
    return this.stakeService.getStake();
  }
}
