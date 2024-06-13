import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebsocketService } from './websocket.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('websocket')
export class WebsocketController {
  constructor(private readonly websocketService: WebsocketService) {}

  @Get('/websocket/config')
  async getWebsocketConfig(): Promise<any> {
    return this.websocketService.getWebSocketConfig();
  }
}
