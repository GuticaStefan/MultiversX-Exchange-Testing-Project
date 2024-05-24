import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MexService } from './mex.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('xexchange')
export class MexController {
  constructor(private readonly xExchangeService: MexService) {}

  @Get('/mex/economics')
  async getXExchangeEconomics(): Promise<any> {
    return undefined;
  }

  @Get('/mex/pairs')
  async getXExchangePairs(): Promise<any> {
    return undefined;
  }

  @Get('/mex-pairs')
  async getXExchangePairsAlternate(): Promise<any> {
    return undefined;
  }

  @Get('/mex/pairs/count')
  async getMaiarExchangePairsCount(): Promise<number> {
    return undefined;
  }

  @Get('/mex/tokens')
  async getXExchangeTokensDetails(): Promise<any> {
    return undefined;
  }

  @Get('/mex/tokens/count')
  async getMaiarExchangeTokensCount(): Promise<number> {
    return undefined;
  }

  @Get('/mex/tokens/:identifier')
  async getXExchangeTokenDetails(
    @Param('identifier') identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/mex/farms')
  async getXExchangeFarmsDetails(): Promise<any> {
    return undefined;
  }

  @Get('/mex/farms/count')
  async getMaiarExchangeFarmsCount(): Promise<number> {
    return undefined;
  }

  @Get('/mex/pairs/:baseId/:quoteId')
  async getXExchangePairsDetails(
    @Param('baseId') baseId: string,
    @Param('quoteId') quoteId: string
  ): Promise<any> {
    return undefined;
  }
}
