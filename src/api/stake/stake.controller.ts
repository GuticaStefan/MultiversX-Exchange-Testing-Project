import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StakeService } from './stake.service';


@Controller('stake')
export class StakeController {
  constructor(private readonly stakeService: StakeService) {}

}
