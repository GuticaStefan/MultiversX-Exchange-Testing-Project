import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get('/results')
  async getSmartContractResults(): Promise<any> {
    return this.resultsService.getSmartContractResults();
  }

  @Get('/results/count')
  async getSmartContractsCount(): Promise<number> {
    return this.resultsService.getSmartContractsCount();
  }

  @Get('/results/:scHash')
  async getSmartContractResultsDetail(
    @Param('scHash')
    scHash: string
  ): Promise<any> {
    return undefined;
  }
}

