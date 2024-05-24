import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeysService } from './keys.service';


@Controller('keys')
export class KeysController {
  constructor(private readonly keysService: KeysService) {}
}
