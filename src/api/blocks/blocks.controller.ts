import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get('/blocks')
  async getBlocks(): Promise<any> {
    return this.blocksService.getBlocks();
  }

  @Get('/blocks/count')
  async getBlocksCount(): Promise<number> {
    return this.blocksService.getBlocksCount();
  }

  @Get('/blocks/latest')
  async getLatestBlockDetails(): Promise<any> {
    return undefined;
  }

  @Get('/blocks/:hash')
  async getBlockDetailsByHash(
    @Param('hash')
    hash: string
  ): Promise<any> {
    return undefined;
  }
}
