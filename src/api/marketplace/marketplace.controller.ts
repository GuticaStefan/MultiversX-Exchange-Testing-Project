import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get('/auctions')
  async getAuctions(): Promise<any> {
    return undefined;
  }

  @Get('/auctions/count')
  async getAuctionsCount(): Promise<number> {
    return undefined;
  }

  @Get('/auctions/:id')
  async getAuctionDetails(
    @Param('id') id: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/accounts/:address/auction/stats')
  async getAccountAuctionStats(
    @Param('address') address: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/accounts/:address/auctions')
  async getAccountAuctions(
    @Param('address') address: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/accounts/:address/auctions/count')
  async getAddressAuctionsCount(
    @Param('address') address: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/collections/:collection/auction/stats')
  async getCollectionAuctionStats(
    @Param('collection') collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/auctions')
  async getCollectionAuctions(
    @Param('collection') collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/auctions/count')
  async getCollectionAuctionsCount(
    @Param('collection') collection: string
  ): Promise<number> {
    return undefined;
  }
}
