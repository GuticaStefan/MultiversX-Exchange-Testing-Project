import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('/collections')
  async getCollections(): Promise<any> {
    return undefined;
  }

  @Get('/collections/count')
  async getCollectionCount(): Promise<number> {
    return undefined;
  }

  @Get('/collections/:collection')
  async getCollectionDetails(
    @Param('collection')
    collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/ranks')
  async getCollectionRanks(
    @Param('collection')
    collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/nfts')
  async getCollectionNFTs(
    @Param('collection')
    collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/nfts/count')
  async getCollectionNFTCount(
    @Param('collection')
    collection: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/collections/:identifier/accounts')
  async getCollectionAccounts(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/transactions')
  async getCollectionTransactions(
    @Param('collection')
    collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/transactions/count')
  async getNFTTransactionCount(
    @Param('collection')
    collection: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/collections/:collection/transfers')
  async getCollectionTransfers(
    @Param('collection')
    collection: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/collections/:collection/transfers/count')
  async getNFTTransferCount(
    @Param('collection')
    collection: string
  ): Promise<number> {
    return undefined;
  }
}
