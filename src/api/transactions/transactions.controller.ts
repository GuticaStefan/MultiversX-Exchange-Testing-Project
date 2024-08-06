import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/transactions')
  async getTransactionList(): Promise<any> {
    return this.transactionsService.getTransactionList();
  }

  @Post('/transactions')
  async sendTransaction(): Promise<any> {
    return undefined;
  }

  @Get('/transactions/count')
  async getTransactionsCount(): Promise<number> {
    return this.transactionsService.getTransactionsCount();
  }

  @Get('/transactions/:txHash')
  async getTransactionDetails(
    @Param('txHash')
    txHash: string
  ): Promise<any> {
    return undefined;
  }

  @Post('/transactions/decode')
  async decodeTransaction(): Promise<any> {
    return undefined;
  }
}
