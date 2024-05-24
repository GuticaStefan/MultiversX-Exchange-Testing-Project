import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Get('/nodes')
  async getNodes(): Promise<any> {
    return undefined;
  }

  @Get('/nodes/versions')
  async getNodeVersions(): Promise<any> {
    return undefined;
  }

  @Get('/nodes/count')
  async getNodesCount(): Promise<number> {
    return undefined;
  }

  @Get('/nodes/auctions')
  async getNodeAuctions(): Promise<any> {
    return undefined;
  }

  @Get('/nodes/:bls')
  async getNode(
    @Param('bls')
    bls: string
  ): Promise<any> {
    return undefined;
  }
}

