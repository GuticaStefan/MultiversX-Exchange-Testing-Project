import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TpsService } from './tps.service';


@Controller('tps')
export class TpsController {
  constructor(private readonly tpsService: TpsService) {}


}
