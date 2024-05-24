import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShardsService } from './shards.service';

@Controller('shards')
export class ShardsController {
  constructor(private readonly shardsService: ShardsService) {}


}
