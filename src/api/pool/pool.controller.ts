import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoolService } from './pool.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Get('/pool')
  async getTransactionsPool(): Promise<any> {
    return undefined;
  }

  @Get('/pool/count')
  async getTransactionsPoolCount(): Promise<number> {
    return undefined;
  }

  @Get('/pool/:txhash')
  async getTransactionFromPool(
    @Param('txhash') txhash: string
  ): Promise<any> {
    return undefined;
  }
}
