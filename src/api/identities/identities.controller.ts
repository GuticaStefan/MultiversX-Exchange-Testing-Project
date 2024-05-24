import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdentitiesService } from './identities.service';

@Controller('identities')
export class IdentitiesController {
  constructor(private readonly identitiesService: IdentitiesService) {}
}
