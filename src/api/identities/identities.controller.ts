import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdentitiesService } from './identities.service';
import { ApiExcludeEndpoint, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('identities')
export class IdentitiesController {
  constructor(private readonly identitiesService: IdentitiesService) {}

  @Get('/identities')
  async getIdentities(): Promise<any> {
    return undefined;
  }

  @Get('/identities/:identifier')
  async getIdentityDetails(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }

  @Get('/identities/:identifier/avatar')
  async getIdentityAvatar(
    @Param('identifier')
    identifier: string
  ): Promise<any> {
    return undefined;
  }
}
