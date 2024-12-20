import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiniblocksService } from './miniblocks.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('miniblocks')
export class MiniblocksController {
  constructor(private readonly miniblocksService: MiniblocksService) {}

  @Get('/miniblocks')
  async getMiniblocks(): Promise<any> {
    return this.miniblocksService.getMiniblocks();
  }

  @Get('/miniblocks/:miniBlockHash')
  async getMiniblockDetails(
    @Param('miniBlockHash')
    miniBlockHash: string
  ): Promise<any> {
    return undefined;
  }
}

