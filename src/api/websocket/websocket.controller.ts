import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebsocketService } from './websocket.service';

@Controller('websocket')
export class WebsocketController {
  constructor(private readonly websocketService: WebsocketService) {}

}
