import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DelegationService } from './delegation.service';

@Controller('delegation')
export class DelegationController {
  constructor(private readonly delegationService: DelegationService) {}
}
