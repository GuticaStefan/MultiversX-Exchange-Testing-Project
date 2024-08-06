import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Get('/tokens')
  async getTokens(): Promise<any> {
    return this.tokensService.getTokens();
  }

  @Get('/tokens/count')
  async getTokensCount(): Promise<number> {
    return this.tokensService.getTokensCount();
  }

  @Get('/tokens/:identifier')
  async getToken(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/supply')
  async getTokenSupply(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/accounts')
  async getTokenAccounts(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/accounts/count')
  async getTokenAccountsCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/tokens/:identifier/transactions')
  async getTokenTransactions(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/transactions/count')
  async getTokenTransactionsCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/tokens/:identifier/roles')
  async getTokenRoles(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/roles/:address')
  async getTokenAddressRoles(
    @Param('identifier')
    identifier: string,
    @Param('address')
    address: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/transfers')
  async getTokenValueTransfers(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/transfers/count')
  async getTokenTransferCount(
    @Param('identifier')
    identifier: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/tokens/:identifier/logo/png')
  async getTokenLogoPNG(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/tokens/:identifier/logo/svg')
  async getTokenLogoSVG(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }
}
