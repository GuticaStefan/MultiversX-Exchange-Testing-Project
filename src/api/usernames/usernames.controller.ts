import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsernamesService } from './usernames.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('usernames')
export class UsernamesController {
  constructor(private readonly usernamesService: UsernamesService) {}

  @Get('/usernames/:username')
  async getAccountDetailsByUsername(
    @Param('username')
    username: string
  ): Promise<any> {
    return undefined;
  }
}

