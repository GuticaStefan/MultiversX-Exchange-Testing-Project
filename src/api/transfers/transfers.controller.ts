import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Get('/transfers')
  async getValueTransfers(): Promise<any> {
    return undefined;
  }

  @Get('/transfers/count')
  async getAccountTransferCount(): Promise<number> {
    return undefined;
  }
}
