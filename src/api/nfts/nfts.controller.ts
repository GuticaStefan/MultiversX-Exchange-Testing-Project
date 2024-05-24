import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NftsService } from './nfts.service';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

}
