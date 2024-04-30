import { Controller, Get, Query, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { Stats } from './dto/stats.dto'
import { EsdtToken } from './dto/esdtToken.dto';
import { NftCollection } from './dto/nftCollection.dto';
import { NftToken } from './dto/nftToken.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('stats')
  async getStats(): Promise<Stats> {
    return await this.apiService.getStats();
  }

  @ApiQuery({name: 'epoch', required: false})
  @ApiQuery({name: 'shard', required: false})
  @Get('blocks/count')
  async getShardBlockCountInEpoch(
    @Query('epoch')  epoch?: number,
    @Query('shard') shard?: number,
  ): Promise<number> {
    return await this.apiService.getShardBlockCountInEpoch(epoch, shard);
  }

  @Get('accounts/:address')
  async getAccountStats(
    @Param('address') address: string
  ): Promise<any | undefined> {
    return await this.apiService.getAccountStats(address);
  }

  @Get('tokens/:id')
  async getToken(
    @Param('id') tokenID: string
  ): Promise<EsdtToken> {
    return await this.apiService.getToken(tokenID);
  }

  @Get('collections/:collectionID')
  async getNftCollection(
    @Param('collectionID') collectionID: string
  ): Promise<NftCollection> {
    return this.apiService.getNftCollection(collectionID);
  }

  @Get('accounts/:address/tokens/count')
  async getTokensCountForUser(
    @Param('address') address: string
  ): Promise<number> {
    return this.apiService.getTokensCountForUser(address);
  }

  @Get('accounts/:address/nfts/count')
  async getNftsCountForUser(
    @Param('address') address: string
  ): Promise<number> {
    return this.apiService.getNftsCountForUser(address);
  }

  @Get('accounts/:address/tokens')
  async getTokensForUser(
    @Param('address') address : string,
    @Query('from') from: number = 0,
    @Query('size') size: number = 100
  ): Promise<EsdtToken[]> {
    return this.apiService.getTokensForUser(address);
  }

  @Get('accounts/:address/tokens/:tokenID')
  async getTokenForUser(
    @Param('address') address: string,
    @Param('tokenID') tokenID: string,
  ): Promise<EsdtToken> {
    return new EsdtToken();
  }

  @Get('accounts/:address/tokens/:tokenID')
  async getTokenBalanceForUser(
    @Param('address') address: string,
    @Param('tokenID') tokenID: string,
  ): Promise<string> {
    return 'token balance for user';
  }

  // @Get('accounts/:address/')
  // async getNftsForUser(): Promise<Stats> {
  //   return await this.apiService.getStats();
  // }

  @Get('accounts/:address/nfts/:nftIdentifier')
  async getNftByTokenIdentifier(
    @Param('address') address: string,
    @Param('nftIdentifier') nftIdentifier: string,
  ): Promise<NftToken> {
    return new NftToken();
  }

  @Get('accounts/:address/nfts/:nftIdentifier')
  async getNftAttributesByTokenIdentifier(
    @Param('address') address: string,
    @Param('nftIdentifier') nftIdentifier: string,
  ): Promise<string> {
    return 'nft attributes by token identifier';
  }

  @Get('network/status/:shardId')
  async getCurrentNonce(
    @Param('shardId') shardId: number 
  ): Promise<any> {
    return 3;
  }

  @Get('blocks')
  async getCurrentBlockNonce(
    @Query('size') size: number = 1,
    @Query('shard') shardId: number
  ): Promise<number> {
    return 1;
  }

  @Get('blocks')
  async getBlockByNonce(
    @Query('nonce') nonce: number,
    @Query('shard') shardId: number
  ): Promise<any> {
    return 1;
  }

  @Get('blocks')
  async getShardTimestamp(
    @Query('from') from: number = 0,
    @Query('size') size: number = 1,
    @Query('shard') shardId: number
  ): Promise<number> {
    return 111;
  }

  @Get('transactions')
  async getTrasactions(
    @Query('receiverShard') receiverShard: number = 0,
    @Query('after') after: number,
    @Query('before') before: number
  ): Promise<any> {
    return "getTransactions";
  }

  @Get('transactions')
  async getTransactionsWithOptions(
    @Query('sender') sender: string,
    @Query('receiver') receiver: string,
    @Query('functionName') functionName: string
  ): Promise<any> {
    return 333;
  }

}
