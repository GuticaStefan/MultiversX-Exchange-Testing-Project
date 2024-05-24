import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoundsService } from './rounds.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('rounds')
export class RoundsController {
  constructor(private readonly roundsService: RoundsService) {}

  @Get('/rounds')
  async getRounds(): Promise<any> {
    return undefined;
  }

  @Get('/rounds/count')
  async getRoundsCount(): Promise<number> {
    return undefined;
  }

  @Get('/rounds/:shard/:round')
  async getRoundDetails(
    @Param('shard')
    shard: string,
    @Param('round')
    round: string
  ): Promise<any> {
    return undefined;
  }
}
