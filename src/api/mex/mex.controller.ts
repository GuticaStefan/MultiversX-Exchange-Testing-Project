import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MexService } from './mex.service';

@Controller('mex')
export class MexController {
  constructor(private readonly mexService: MexService) {}
}
