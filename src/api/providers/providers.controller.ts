import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('/providers')
  async getProviders(): Promise<any> {
    return this.providersService.getProviders();
  }

  @Get('/providers/:address/accounts')
  async getProviderAccounts(
    @Param('address')
    address: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/providers/:address/accounts/count')
  async getProviderAccountsCount(
    @Param('address')
    address: string
  ): Promise<number> {
    return undefined;
  }

  @Get('/providers/:address')
  async getProvider(
    @Param('address')
    address: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/providers/:address/avatar')
  async getProviderAvatar(
    @Param('address')
    address: string
  ): Promise<any> {
    return undefined;
  }
}
