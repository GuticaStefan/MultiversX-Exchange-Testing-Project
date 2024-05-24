import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NetworkService } from './network.service';

@Controller('network')
export class NetworkController {
  constructor(private readonly networkService: NetworkService) {}
}
