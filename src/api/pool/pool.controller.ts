import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoolService } from './pool.service';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

}
