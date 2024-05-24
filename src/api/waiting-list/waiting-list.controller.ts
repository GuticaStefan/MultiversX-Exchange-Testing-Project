import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaitingListService } from './waiting-list.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('waiting-list')
export class WaitingListController {
  constructor(private readonly waitingListService: WaitingListService) {}

  @Get('/waiting-list')
  async getWaitingList(): Promise<any> {
    return undefined;
  }

  @Get('/waiting-list/count')
  async getWaitingListCount(): Promise<number> {
    return undefined;
  }
}
