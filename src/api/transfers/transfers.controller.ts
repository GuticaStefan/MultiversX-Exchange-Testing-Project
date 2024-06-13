import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get('/transfers')
  async getTransfers(): Promise<any> {
    return this.transfersService.getTransfers();
  }

  @Get('/transfers/count')
  async getTransfersCount(): Promise<number> {
    return this.transfersService.getTransfersCount();
  }
}
