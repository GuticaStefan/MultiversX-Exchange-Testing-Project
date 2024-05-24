import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoundsService } from './rounds.service';

@Controller('rounds')
export class RoundsController {
  constructor(private readonly roundsService: RoundsService) {}

}
