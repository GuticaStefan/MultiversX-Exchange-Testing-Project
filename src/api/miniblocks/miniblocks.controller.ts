import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiniblocksService } from './miniblocks.service';

@Controller('miniblocks')
export class MiniblocksController {
  constructor(private readonly miniblocksService: MiniblocksService) {}

}
