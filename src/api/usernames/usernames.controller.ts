import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsernamesService } from './usernames.service';

@Controller('usernames')
export class UsernamesController {
  constructor(private readonly usernamesService: UsernamesService) {}


}
