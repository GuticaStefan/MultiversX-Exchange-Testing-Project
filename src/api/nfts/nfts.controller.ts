import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Get('/nfts')
  async getNfts(): Promise<any> {
    return this.nftsService.getNfts();
  }

  @Get('/nfts/count')
  async getNftsCount(): Promise<number> {
    return this.nftsService.getNftsCount();
  }

  @Get('/nfts/:identifier')
  async getNFTDetails(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/thumbnail')
  async getNFTThumbnail(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/supply')
  async getNFTSupply(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/accounts')
  async getNFTAccounts(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/accounts/count')
  async getNFTAccountsCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/nfts/:identifier/transactions')
  async getNFTTransactions(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/transactions/count')
  async getNFTTransactionsCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/nfts/:identifier/transfers')
  async getNFTTransfers(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/nfts/:identifier/transfers/count')
  async getNFTTransfersCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }
}

