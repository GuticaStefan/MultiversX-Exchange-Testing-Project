import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}


}
