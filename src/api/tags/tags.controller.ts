import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('/tags')
  async getNFTTags(): Promise<any> {
    return undefined;
  }

  @Get('/tags/count')
  async getNFTTagsCount(): Promise<number> {
    return undefined;
  }

  @Get('/tags/:tag')
  async getTagDetails(
    @Param('tag')
    tag: string
  ): Promise<any> {
    return undefined;
  }
}
