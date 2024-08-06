import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShardsService } from './shards.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('shards')
export class ShardsController {
  constructor(private readonly shardsService: ShardsService) {}

  @Get('/shards')
  async getShards(): Promise<any> {
    return this.shardsService.getShards();
  }
}

