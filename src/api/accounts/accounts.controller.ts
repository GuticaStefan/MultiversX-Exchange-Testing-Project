import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RandomGenerator } from '../utils/seededRandomUtilities';

@Controller()
@ApiTags('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  
  @Get('/accounts')
  async getAccounts(): Promise<any> {
    return this.accountsService.getAccounts();
  }

  @Get('/accounts/count')
  async getAccountsCount(): Promise<number> {
    return this.accountsService.getAccountsCount();
  }

  @Get('/accounts/:address')
  async getAccountDetailsByAddress(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountDetailsByAddress(address);
  }

  @Get('/accounts/:address/deferred')
  async getAccountDeferredPaymentDetails(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountVerificationDetails(address);
  }

  @Get('/accounts/:address/verification')
  async getAccountVerificationDetails(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountVerificationDetails(address);
  }

  @Get('/accounts/:address/tokens')
  async getAccountTokens(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountTokens(address);
  }

  @Get('/accounts/:address/tokens/count')
  async getTokensCountForUser(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getTokensCountForUser(address);
  }

  @Get('/accounts/:address/tokens/:token')
  async getAccountTokenDetails(
    @Param('address')
    address: string,
    @Param('token')
    token: string
  ): Promise<any> {
    return this.accountsService.getAccountTokenDetails(address, token);
  }

  @Get('/accounts/:address/roles/collections')
  async getAccountCollections(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountCollections(address);
  }

  @Get('/accounts/:address/roles/collections/count')
  async getAccountCollectionCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountCollectionCount(address);
  }

  @Get('/accounts/:address/roles/collections/:collection')
  async getAccountCollectionDetails(
    @Param('address')
    address: string,
    @Param('collection')
    collection: string
  ): Promise<any> {
    return this.accountsService.getAccountCollectionDetails(address, collection);
  }

  @Get('/accounts/:address/roles/tokens')
  async getAccountTokenRoles(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountTokenRoles(address);
  }

  @Get('/accounts/:address/roles/tokens/count')
  async getAccountTokenRolesCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountTokenRolesCount(address);
  }

  @Get('/accounts/:address/roles/tokens/:identifier')
  async getAccountTokenRolesDetails(
    @Param('address')
    address: string,
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return this.accountsService.getAccountTokenRolesDetails(address, identifier);
  }

  @Get('/accounts/:address/collections')
  async getAccountCollectionsByAddress(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountCollectionsByAddress(address);
  }

  @Get('/accounts/:address/collections/count')
  async getAccountCollectionCountByAddress(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountCollectionCountByAddress(address);
  }

  @Get('/accounts/:address/collections/:collection')
  async getAccountCollectionDetailsByAddress(
    @Param('address')
    address: string,
    @Param('collection')
    collection: string
  ): Promise<any> {
    return this.getAccountCollectionDetailsByAddress(address, collection);
  }

  @Get('/accounts/:address/nfts')
  async getAccountNFTs(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountNFTs(address);
  }

  @Get('/accounts/:address/nfts/count')
  async getAccountNFTCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountNFTCount(address);
  }

  @Get('/accounts/:address/nfts/:nft')
  async getAccountNFTDetails(
    @Param('address')
    address: string,
    @Param('nft')
    nft: string
  ): Promise<any> {
    return this.accountsService.getAccountNFTDetails(address, nft);
  }

  @Get('/accounts/:address/stake')
  async getAccountStakeDetails(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountStakeDetails(address);
  }

  @Get('/accounts/:address/delegation')
  async getAccountDelegations(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountDelegations(address);
  }

  @Get('/accounts/:address/delegation-legacy')
  async getAccountLegacyDelegationDetails(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountLegacyDelegationDetails(address);
  }

  @Get('/accounts/:address/keys')
  async getAccountNodes(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountNodes(address);
  }

  @Get('/accounts/:address/waiting-list')
  async getAccountQueuedNodes(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountQueuedNodes(address);
  }

  @Get('/accounts/:address/transactions')
  async getAccountTransactionList(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountTransactionList(address);
  }

  @Get('/accounts/:address/transactions/count')
  async getAccountTransactionCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountTransactionCount(address);
  }

  @Get('/accounts/:address/transfers')
  async getAccountTransfers(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountTransfers(address);
  }

  @Get('/accounts/:address/transfers/count')
  async getAccountTransferCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountTransferCount(address);
  }

  @Get('/accounts/:address/contracts')
  async getAccountContracts(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountContracts(address);
  }

  @Get('/accounts/:address/contracts/count')
  async getAccountContractsCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountContractsCount(address);
  }

  @Get('/accounts/:address/upgrades')
  async getAccountUpgradesDetails(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountUpgradesDetails(address);
  }

  @Get('/accounts/:address/results')
  async getAccountSmartContractResults(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountSmartContractResults(address);
  }

  @Get('/accounts/:address/results/count')
  async getAccountSmartContractResultsCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountSmartContractResultsCount(address);
  }

  @Get('/accounts/:address/results/:scHash')
  async getAccountSmartContractResult(
    @Param('address')
    address: string,
    @Param('scHash')
    scHash: string
  ): Promise<any> {
    return this.accountsService.getAccountSmartContractResult(address, scHash);
  }

  @Get('/accounts/:address/history')
  async getAccountHistory(
    @Param('address')
    address: string
  ): Promise<any> {
    return this.accountsService.getAccountHistory(address);
  }

  @Get('/accounts/:address/history/count')
  async getAccountHistoryCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return this.accountsService.getAccountHistoryCount(address);
  }

  @Get('/accounts/:address/history/:tokenIdentifier/count')
  async getAccountTokenHistoryCount(
    @Param('address')
    address: string,
    @Param('tokenIdentifier')
    tokenIdentifier: string
  ): Promise<number> {
    return this.accountsService.getAccountTokenHistoryCount(address, tokenIdentifier);
  }

  @Get('/accounts/:address/history/:tokenIdentifier')
  async getAccountTokenHistory(
    @Param('address')
    address: string,
    @Param('tokenIdentifier')
    tokenIdentifier: string
  ): Promise<any> {
    return this.accountsService.getAccountTokenHistory(address, tokenIdentifier);
  }
}